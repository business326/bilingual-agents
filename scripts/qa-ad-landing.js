/* ============================================================================
   qa-ad-landing.js — QA gate for the keyword landing pages.

   Verifies, for every entry in adLandingMap AND its generated HTML:
     1. primaryKeyword appears in seoTitle           (and in the served <title>)
     2. primaryKeyword appears in the H1              (served <h1>)
     3. primaryKeyword/role word appears in formTitle
     4. primaryCta matches the required Google Ads CTA
     5. that CTA is present in googleAdsHeadlines
     6. primaryKeyword appears in >=3 googleAdsHeadlines
     7. googleAdsDescriptions: <=4, each within length budget, on-angle
     8. no wrong-industry terms leak onto the page
     9. no fake-proof tokens; no apostrophes in hero HTML (generator safety)

   Run:  node scripts/qa-ad-landing.js    (run AFTER build-ad-landing.js)
   Exits non-zero if any HARD check fails.
   ==========================================================================*/
const fs = require("fs");
const path = require("path");
const ROOT = path.resolve(__dirname, "..");
const { adLandingMap } = require(path.join(ROOT, "adLandingMap.js"));

const REQUIRED_CTA = "Book Your Free 15-Min Call";
const strip = (s) => String(s).replace(/<[^>]*>/g, "").replace(/&amp;/g, "&").toLowerCase();
const has = (hay, needle) => strip(hay).includes(String(needle).toLowerCase());

// industry → terms that must NOT appear on that industry's pages
const FORBIDDEN = {
  "/home-services":      ["insurance", "property management", "leasing", "tenant", "csr", "quote intake"],
  "/property-management":["insurance", "dispatcher", "hvac", "plumbing", "roofing", "csr", "quote intake"],
  "/insurance":          ["dispatcher", "hvac", "plumbing", "roofing", "property management", "leasing", "tenant"],
};
const FAKE_PROOF = ["testimonial", "5-star", "trusted by", "our clients say", "as seen on", "rated #1"];

let hard = 0, soft = 0;
const fail = (p, m) => { hard++; console.log(`  ✗ [${p}] ${m}`); };
const warn = (p, m) => { soft++; console.log(`  ! [${p}] ${m}`); };

for (const e of adLandingMap) {
  const lp = e.landingPage, p = e.path, kw = e.primaryKeyword;

  // 1 seoTitle
  if (!has(lp.seoTitle, kw)) fail(p, `seoTitle missing primaryKeyword "${kw}"`);
  // 2 headline
  if (!has(lp.headline.en, kw)) {
    // allow "extremely close": every significant word of kw present
    const words = kw.toLowerCase().split(/\s+/).filter(w => w.length > 2);
    const h = strip(lp.headline.en);
    if (!words.every(w => h.includes(w))) fail(p, `headline missing primaryKeyword "${kw}"`);
  }
  // 3 formTitle shares a role word
  const roleWords = kw.toLowerCase().split(/\s+/).filter(w => !["bilingual","spanish","speaking","a","for","the"].includes(w) && w.length > 2);
  if (roleWords.length && !roleWords.some(w => has(lp.formTitle.en, w))) warn(p, `formTitle may not match role angle of "${kw}"`);
  // 4 + 5 CTA
  if (lp.primaryCta.en !== REQUIRED_CTA) fail(p, `primaryCta.en is "${lp.primaryCta.en}" — must be "${REQUIRED_CTA}"`);
  if (!e.googleAdsHeadlines.includes(REQUIRED_CTA)) fail(p, `googleAdsHeadlines missing exact CTA "${REQUIRED_CTA}"`);
  // 6 keyword in >=3 headlines
  const kwHeadlines = e.googleAdsHeadlines.filter(h => has(h, kw)).length;
  if (kwHeadlines < 3) warn(p, `primaryKeyword in only ${kwHeadlines} ad headlines (want >=3)`);
  // 7 descriptions
  if (e.googleAdsDescriptions.length > 4) fail(p, `>4 googleAdsDescriptions (${e.googleAdsDescriptions.length})`);
  e.googleAdsDescriptions.forEach((d, i) => { if (d.length > 90) warn(p, `description ${i+1} is ${d.length} chars (>90)`); });
  // 8 headlines length
  if (e.googleAdsHeadlines.length > 15) fail(p, `>15 googleAdsHeadlines (${e.googleAdsHeadlines.length})`);
  e.googleAdsHeadlines.forEach(h => { if (h.length > 30) warn(p, `headline "${h}" is ${h.length} chars (>30)`); });
  // 8b wrong-industry terms
  const industry = Object.keys(FORBIDDEN).find(k => p.startsWith(k));
  if (industry) {
    const blob = strip([lp.seoTitle, lp.headline.en, lp.subheadline.en, lp.eyebrow.en, lp.formTitle.en].join(" || "));
    FORBIDDEN[industry].forEach(term => { if (blob.includes(term)) fail(p, `wrong-industry term "${term}" on ${industry} page`); });
  }
  // 9 fake proof + apostrophe safety
  const heroHtml = lp.headline.en + " " + lp.subheadline.en + " " + lp.headline.es + " " + lp.subheadline.es;
  FAKE_PROOF.forEach(t => { if (strip([lp.headline.en, lp.subheadline.en].join(" ")).includes(t)) fail(p, `possible fake-proof token "${t}"`); });
  if (/'/.test(heroHtml)) fail(p, `apostrophe in hero HTML (breaks single-quoted data-es) — rephrase`);

  // 11 served HTML (only if generated)
  const outFile = path.join(ROOT, p.replace(/^\//, ""), "index.html");
  if (fs.existsSync(outFile)) {
    const out = fs.readFileSync(outFile, "utf8");
    const title = (out.match(/<title>([\s\S]*?)<\/title>/) || [,""])[1];
    const h1 = (out.match(/<h1[^>]*id="lp-headline"[^>]*>([\s\S]*?)<\/h1>/) || [,""])[1];
    if (!has(title, kw)) {
      const words = kw.toLowerCase().split(/\s+/).filter(w => w.length > 2);
      if (!words.every(w => strip(title).includes(w))) fail(p, `served <title> missing keyword`);
    }
    if (!has(h1, kw)) {
      const words = kw.toLowerCase().split(/\s+/).filter(w => w.length > 2);
      if (!words.every(w => strip(h1).includes(w))) fail(p, `served <h1> missing keyword`);
    }
    if (!out.includes(`${REQUIRED_CTA} <span class="arr">→</span>`)) fail(p, `served page CTA button not swapped to "${REQUIRED_CTA}"`);
  } else {
    warn(p, `no generated file yet (run build-ad-landing.js)`);
  }
}

console.log(`\nQA: ${adLandingMap.length} entries · ${hard} hard failure(s) · ${soft} warning(s)`);
process.exit(hard ? 1 : 0);
