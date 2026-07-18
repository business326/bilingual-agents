/* ============================================================================
   build-ad-landing.js  —  keyword landing-page generator (no framework, no build step)

   Source of truth : ../adLandingMap.js   (Google Ads copy + landing copy, matched 1:1)
   Template        : ../index.html         (the live general page — reused as-is)
   Output          : one static <path>/index.html per map entry

   For each entry we swap ONLY the "top of page" copy — <title>, meta description,
   hero eyebrow / headline / subheadline, every primary CTA button, and the form
   title — from the map. Everything else (funnel, form → CRM, Calendly → /thank-you,
   GTM/GA4, WhatsApp, pricing, FAQ, footer) is inherited byte-for-byte.

   Run:  node scripts/build-ad-landing.js
   ==========================================================================*/
const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const TEMPLATE = path.join(ROOT, "index.html");
const { adLandingMap } = require(path.join(ROOT, "adLandingMap.js"));

/* --- exact anchors that exist in index.html (keep in sync with the template) --- */
const TITLE_SRC = "<title>Hire Bilingual Remote Agents from Latin America | Bilingual Agents</title>";
const DESC_SRC  = '<meta name="description" content="Hire vetted, psychologist-screened bilingual (English/Spanish) remote agents from Latin America — an agent working for you within 7 days, from $1,497. 45-day free replacement.">';
const CTA_EN_TOKEN = 'Hire a bilingual agent <span class="arr">→</span>';
const CTA_ES_TOKEN = 'Contrata un agente bilingüe <span class="arr">→</span>';
const NAV_CTA_SRC  = 'data-call-cta data-es="Contrata un agente bilingüe">Hire a bilingual agent</a>';
const FORMTITLE_SRC = 'data-es="Agenda tu llamada gratis">Book my free call</div>';
const FAIL_CTA_SRC  = '(window.LANG === "es" ? "Contrata un agente bilingüe" : "Hire a bilingual agent")';

const RE_EYEBROW  = /<p class="eyebrow reveal" id="lp-eyebrow"[^>]*>[\s\S]*?<\/p>/;
const RE_HEADLINE = /<h1 class="reveal" id="lp-headline"[^>]*>[\s\S]*?<\/h1>/;
const RE_SUB      = /<p class="lede reveal" id="lp-sub"[^>]*>[\s\S]*?<\/p>/;

const dq = (v) => String(v).replace(/"/g, "&quot;");   // safe inside data-es="..."
const sq = (v) => String(v).replace(/'/g, "&#39;");    // safe inside data-es='...'
const esc = (v) => String(v).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"); // for <title>/attr content (plain)

function assertContains(html, needle, label, p) {
  if (html.indexOf(needle) === -1) {
    throw new Error(`[${p}] template anchor not found: ${label}. index.html changed — update build-ad-landing.js anchors.`);
  }
}

function buildPage(entry) {
  const lp = entry.landingPage;
  let html = fs.readFileSync(TEMPLATE, "utf8");

  // fail loudly if the template drifted from our anchors
  assertContains(html, TITLE_SRC, "title", entry.path);
  assertContains(html, DESC_SRC, "meta description", entry.path);
  assertContains(html, CTA_EN_TOKEN, "CTA (en)", entry.path);
  assertContains(html, NAV_CTA_SRC, "nav CTA", entry.path);
  assertContains(html, FORMTITLE_SRC, "form title", entry.path);
  if (!RE_HEADLINE.test(html)) throw new Error(`[${entry.path}] hero <h1 id="lp-headline"> anchor missing`);

  // 1) <title> + meta description
  html = html.split(TITLE_SRC).join(`<title>${esc(lp.seoTitle)}</title>`);
  html = html.split(DESC_SRC).join(`<meta name="description" content="${esc(lp.seoDescription)}">`);

  // 2) hero eyebrow / headline / subheadline (en shown, es for the language toggle)
  html = html.replace(RE_EYEBROW,
    `<p class="eyebrow reveal" id="lp-eyebrow" data-es="${dq(lp.eyebrow.es)}">${lp.eyebrow.en}</p>`);
  html = html.replace(RE_HEADLINE,
    `<h1 class="reveal" id="lp-headline" style="--d:.08s" data-es='${sq(lp.headline.es)}'>${lp.headline.en}</h1>`);
  html = html.replace(RE_SUB,
    `<p class="lede reveal" id="lp-sub" style="--d:.16s" data-es='${sq(lp.subheadline.es)}'>${lp.subheadline.en}</p>`);

  // 3) every primary CTA button (hero, pricing, guarantee, steps, submit buttons…)
  html = html.split(CTA_EN_TOKEN).join(`${lp.primaryCta.en} <span class="arr">→</span>`);
  html = html.split(CTA_ES_TOKEN).join(`${lp.primaryCta.es} <span class="arr">→</span>`);

  // 4) nav CTA (plain, no arrow)
  html = html.split(NAV_CTA_SRC).join(`data-call-cta data-es="${dq(lp.primaryCta.es)}">${lp.primaryCta.en}</a>`);

  // 5) form title (page form + modal) — role/industry angle
  html = html.split(FORMTITLE_SRC).join(`data-es="${dq(lp.formTitle.es)}">${lp.formTitle.en}</div>`);

  // 6) submit-error retry button label (JS literal) — keep the CTA consistent everywhere
  html = html.split(FAIL_CTA_SRC).join(`(window.LANG === "es" ? "${lp.primaryCta.es}" : "${lp.primaryCta.en}")`);

  return html;
}

function main() {
  if (!Array.isArray(adLandingMap) || !adLandingMap.length) {
    throw new Error("adLandingMap is empty");
  }
  const written = [];
  for (const entry of adLandingMap) {
    if (!entry.path || entry.path === "/") continue; // root stays the general page
    const outDir = path.join(ROOT, entry.path.replace(/^\//, ""));
    fs.mkdirSync(outDir, { recursive: true });
    const outFile = path.join(outDir, "index.html");
    fs.writeFileSync(outFile, buildPage(entry), "utf8");
    written.push(entry.path);
  }
  console.log(`Generated ${written.length} keyword landing pages:`);
  written.forEach((p) => console.log("  " + p));
}

main();
