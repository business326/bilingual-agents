# Bilingual Agents Landing Pages

Two single-file landing funnels for **Bilingual Agents** client-acquisition ads (Google Search + Meta retargeting). No build step, no dependencies — free static hosting on Vercel.

> **Brand vs. infra:** the on-page brand is **Bilingual Agents**. The live custom domain is **`www.bilingualagentsgroup.com`** (Site A), attached to the `staffside` Vercel project. As of the June 2026 SEO pass, the canonical, OG/Twitter, `hreflang`, JSON-LD `@id`s, `sitemap.xml`, and `llms.txt` all point at `www.bilingualagentsgroup.com` — **do not revert these to the `*.vercel.app` URL.** The old `staffsidehq.vercel.app` host now 308-redirects to the live domain via root `vercel.json` (host-conditional redirect) to kill the duplicate. Public contact email is `business@bilingualagentsgroup.com`.

| Variant | File | Live URL | Vercel project |
|---|---|---|---|
| A — editorial (paper/serif) | `index.html` | https://staffsidehq.vercel.app | `staffside` |
| B — direct-response ($100M Offers style) | `nexohire-direct/index.html` | https://staffside-direct.vercel.app | `staffside-direct` |

Old URLs (nexohire.vercel.app, nexohire-direct.vercel.app) 308-redirect to the current ones. Buy a real domain (`bilingualagents.com`, $30 budgeted in the brief) and add it to both projects for clean, on-brand links.

**One conversion goal:** every button on both pages is the same action — "Book my free role call." No nav links, no secondary CTAs, no escape routes.

## Traffic splitter (`middleware.ts`)

Ads point at the bare root, `https://www.bilingualagentsgroup.com/`. A Vercel Routing Middleware intercepts that one path and 302-redirects each visitor to one of three landing variants, so all three can be tested on identical traffic without touching the ads.

| Variant | Served at | Weight |
|---|---|---|
| A | `/pitch` | 34 |
| B | `/pitch-b` | 33 |
| C — a copy of the homepage | `/pitch-c` | 33 |

**Editing the weights.** They live in one object at the top of `middleware.ts`:

```ts
const SPLIT = {
  enabled: true,
  variants: {
    '/pitch': 34,
    '/pitch-b': 33,
    '/pitch-c': 33,
  },
}
```

Change the numbers and redeploy. They do **not** have to add up to 100 — each weight is divided by the sum of all of them, so `{ '/pitch': 1, '/pitch-b': 3 }` is a valid 25/75 split. A weight of `0` takes a variant out of the rotation without deleting it. Adding a fourth variant is a new key plus the matching `*.html` file (and a `!/…` line in `.gitignore` — see below).

**Turning it off.** Set `enabled: false`. Every request to `/` then 302s to `/pitch-c` with no split and no rolling. While disabled the cookie is neither read nor written, so existing assignments survive untouched — flipping it back to `true` puts returning visitors straight back on the variant they were already seeing, and the test data stays clean.

**Visitors who already have a cookie.** The first visit rolls a variant and stores it in a `ba_variant` cookie for 30 days. Every later visit to `/` reads that cookie and sends the visitor to the same page, ignoring the weights entirely — so someone who leaves and comes back is not counted twice under two different variants. Consequences worth knowing:

- Changing the weights only affects **new** visitors. Existing cookie-holders keep their variant until it expires (30 days) or they clear cookies.
- If a variant is removed from `variants`, anyone holding a cookie for it is re-rolled onto a current variant on their next visit rather than being sent to a dead page.
- To see the split yourself, use a fresh incognito window per roll — one browser will stick to one variant by design.

**Deliberate details, don't "fix" them:**
- Redirects are **302**, never 301. A 301 is cached by the browser indefinitely and would freeze a visitor on one variant even after the weights change.
- The redirect carries the full query string through untouched, so `gclid` / `gbraid` / `wbraid` reach the landing page and Google Ads can still tie a conversion back to its click.
- The matcher is `'/'` exactly. The variant pages, `/thank-you`, `/booked`, the keyword landing pages, and every asset are never touched.
- `Cache-Control: no-store` + `Vary: Cookie` are what stop the CDN caching one visitor's 302 and pinning everyone to a single variant.
- `middleware.ts` needs its own `!/middleware.ts` line in `.gitignore` — this repo ignores everything by default and whitelists deployable files one by one.

**Side effect:** with the middleware live, `/` no longer serves `index.html` at all. Nothing is lost — `/pitch-c` *is* that page — but the client-side splitter still inside `index.html` becomes dead code, reachable only by requesting `/index.html` directly.

## Go-live checklist (10 minutes)

1. **Booking flow** — every CTA opens a modal form (name, company, company size, industry, work email). No Calendly — submissions go straight to the CRM. *(Done.)*
2. **Lead delivery** — `var FORM_ENDPOINT` on both pages points at the `submit-lead` CRM endpoint, so every booking lands in the dashboard live. *(Done — see CRM section below.)*
3. **Email address** — replace the `hello@bilingualagents.com` placeholder (footer + error fallback) with the real inbox.
4. **Ad tracking** — paste the Google Ads tag / Meta Pixel before `</head>`. Fire the conversion event inside `done()` in the form handler (marked with a comment).
5. **Redeploy** — A: `npx vercel deploy --prod --yes` from the project root. B: same command with `--cwd "C:\Users\sebas\funnel brian\nexohire-direct"`.

## Bilingual (English / Español) — Site A

Site A (`index.html`) ships a built-in EN/ES toggle. English is the source of truth in the markup; every translatable element carries a co-located `data-es="…"` attribute (or `data-es-ph="…"` for input placeholders) holding the Spanish HTML. A small inline i18n script caches the English, swaps to Spanish on demand, and:
- **auto-detects** `navigator.language` (anything starting `es` → Spanish) on first visit,
- honors a `?lang=es` / `?lang=en` query override and the nav **toggle** (globe pill, left of the CTA),
- **remembers** the choice in `localStorage` (`ba_lang`),
- swaps `<html lang>`, `<title>`, and meta description too; the two rotating guarantee seals and the success messages are translated as well.

**Editing rule:** when you add or change visible English copy on Site A, add/update its `data-es` (or `data-es-ph`) on the same element, or it stays English in Spanish mode. Dynamic JS strings (the "Booking…" label, the fail-alert, the button reset) branch on `window.LANG`. Verify both languages before deploying (toggle the nav pill; check the modal + form). Site B (`nexohire-direct/`) is **not** bilingual yet — the same pattern can be applied if wanted.

## Current pricing model (June 2026 — Staffside_Partner_Brief)

Per the June 2026 Partner Brief, the anchor offer is **VETTED $1,997** (psych report, 45-day no-questions replacement, working by day 7). **Display note (owner, June 2026):** the visible headline price on both pages now reads **"from $1,497"** (the real SOURCE entry price) in every hero/announce/stat/sticky/meta spot — the owner wanted the cheaper number featured — while the full 3-tier matrix below intentionally keeps $1,997 as the ★ tier (a "from $1,497, most pick $1,997" funnel). Post-booking success copy was made price-neutral so it can't contradict the headline. The pages still show the full 3-tier chart in a dedicated pricing section: SOURCE $1,497 (15-day guarantee, 10 biz days — intentional decoy per the brief) · VETTED $1,997 ★ highlighted · MANAGED $1,997 + $149/mo. The volume-discount table (VETTED base: $1,747 at 3, $1,547 at 5 ★, $1,297 at 10+) sits under the matrix. Anchors: US agencies $6,000–$11,250, HireLATAM $3,500 ("$1,500 less than HireLATAM"). A note under the matrix clarifies every page promise is the VETTED tier. Price stays ON the page (earlier analysis stands). Phase plan: hold $1,997 through Month 3; test $2,200 at Month 6 with 15+ placements.

June 2026 copy pass (owner's 7-rule brief): dream-outcome headlines, "working by day 7" timeline (steps Day 0 / 1–5 / 6 / 7), 75-minute total client effort, "no forms, no questions" guarantee language, and psych-eval featured as the differentiator. The psych eval is now ON the pages per owner instruction (overriding the model doc's wait-until-standardized warning) — make sure the report process is consistent before scaling ad spend. **No social proof is on the pages** — the earlier "first client" result line was removed because there are no clients yet. Add a real testimonial/result only once one exists.

Still deliberately **kept off the pages**:
- "AT&T" by name — pages say "a major US telecom" (don't name a client brand publicly without permission).
- Anything implying we touch agent pay — money flows client → Wise/Payoneer → agent; we charge the placement fee only.
- Any testimonials / results / client counts — none yet (no clients), so the pages currently carry zero social proof. Add real ones as they happen; never fabricate.

## SEO / GEO (June 2026 pass)

Each site ships `robots.txt` (allow-all incl. GPTBot/ClaudeBot/PerplexityBot, sitemap reference), `sitemap.xml`, `llms.txt` (AI-engine fact sheet: pricing, timeline, guarantee, direct-pay), a 1200×630 `og.png` share image, canonical tag, full OG/Twitter meta, favicon, and one JSON-LD `@graph` (Organization + WebSite + Service with the 3 real tier Offers + FAQPage built only from Q&A text visible on that page). Titles are keyword-differentiated per site (A: "remote agents Latin America", B: "bilingual customer service agents") so the two hosts don't compete as duplicates. Schema rules: no reviews/ratings/client counts/sameAs/address — none exist yet; FAQPage must always mirror visible page text. If the domain changes, update canonical + og:url + og:image/twitter:image + sitemap `<loc>` + robots `Sitemap:` + llms.txt URL together. After significant copy changes, re-run the `seo-geo-audit` skill (`~/.claude/skills/seo-geo-audit/SKILL.md`). Post-launch task: submit both sitemaps in Google Search Console.

## CRM (lead capture + pipeline + scheduling)

Every booking from both sites flows into one place. Built on Supabase (Postgres + Auth + Edge Functions + Realtime) with a modular dashboard on Vercel.

| Piece | Where | Notes |
|---|---|---|
| Database | Supabase project `bilingual-agents-crm` (ref `vwprjidtgneuatvszfkg`) | tables: `leads`, `tasks`, `meetings`, `activities`, `booking_settings`, `app_admins`. RLS locks all to an admin allowlist |
| Intake API | `…/functions/v1/submit-lead` | Public (no JWT); honeypot + validation; returns `lead_id`; writes via service role |
| Booking API | `…/functions/v1/get-availability`, `…/book-slot` | Public; compute open slots (hours − booked) and reserve a slot; tz-aware; unique index blocks double-booking |
| Dashboard | https://bilingual-agents-crm.vercel.app | Vercel project `bilingual-agents-crm`; modular source in `bilingual-agents-crm/` (`index.html` + `css/` + `js/`) |

**Data flow:** website form → `submit-lead` → `leads` → dashboard (live via Realtime). After submitting, the visitor picks a time slot → `book-slot` → `meetings` → shows on the CRM calendar.

**Dashboard (4 views + slide-over):**
- **Board** — Kanban by status (New → Called → Qualified → Won → Lost); cards show size/industry/source + meeting & open-task chips; change status inline.
- **Leads** — sortable, searchable dense table.
- **Calendar** — month grid of calls + task due-dates; side panel with **due/overdue tasks** and **upcoming calls**.
- **Analytics** — leads with a **Revenue & delivery** band: **Collected**, **Outstanding** (unpaid balance on won deals), **Clients closed**, **Revenue won**, **Agents placed**, **Agents to deliver**, plus qualified-pipeline and avg-deal-size. Below it a **Closed clients** table (deal value / collected / outstanding / agents placed-of-needed / closed date), then the pipeline KPIs (booked-rate, win-rate, avg time-to-contact) + Chart.js (leads over time, by source, by status) + funnel.
- **Lead detail** (click any lead) — editable fields, a **Deal & delivery** block (deal value, amount collected, agents needed, agents placed → auto-computes outstanding $ and agents owed), notes, per-lead **tasks** (due dates, complete/overdue), **meetings** (schedule / mark done/no-show), and an auto-written **activity timeline** (created, status changes, calls, tasks).

**Auto-logging:** DB triggers write the activity timeline and stamp `called_at` (first time a lead leaves New) and task `completed_at`. Nothing to log by hand.

**Self-booking availability:** edit `booking_settings` (timezone, slot length, weekly hours, lead-time, how far out). Default: Mon–Fri 9–5 ET, 30-min slots, 12h lead time, 14 days out. Change via SQL or extend the dashboard.

**Login:** allowlist-gated. Admin = `sebasjack111@gmail.com` (temp password set at setup — **change it on first login** via "Change password"). A stray self-signup with no `app_admins` row sees nothing (RLS-enforced).

**Add a teammate:** create their auth user, then `insert into app_admins (user_id, email) values ('<uid>', '<email>');`

**Revenue tracking:** the `leads` table carries `deal_value`, `amount_collected`, `agents_needed`, `agents_placed` (and an auto-stamped `closed_at` when a lead first becomes *won*). Fill them from the lead's **Deal & delivery** block; the Analytics band rolls them up. These columns are admin-only (table RLS) and never returned by any public edge function (`book-slot` selects only `leads.id`; `get-availability` never reads `leads`).

**Security model:** every CRM table's RLS requires `public.is_admin()` (checks `app_admins`). The public edge functions bypass RLS with the service role, so the websites never touch tables directly. The anon key in the dashboard is safe to ship — RLS is the gate. Hardening done June 2026: `is_admin()` is now `SECURITY INVOKER` (reads the caller's own `app_admins` row via a self-select policy — no recursion, clears the SECURITY DEFINER advisor); `app_admins` is writable only via service role / SQL (no API write path); all trigger functions are `SECURITY INVOKER` with pinned `search_path` and `EXECUTE` revoked from anon/authenticated so none are RPC-callable. Code audit: no service-role key or other secret appears in any client file — only the anon key. The single remaining advisor is the optional leaked-password toggle.

**Redeploy the dashboard after edits:** `npx vercel deploy --prod --yes --cwd "C:\Users\sebas\funnel brian\bilingual-agents-crm"`. The folder is in the root `.vercelignore` so Site A never bundles it.

**Optional hardening:** enable leaked-password protection in Supabase → Auth → Passwords (one toggle — checks new passwords against HaveIBeenPwned). This is the only outstanding security advisor.

## Funnel structure ($100M Offers mapping)

| Section | Job |
|---|---|
| Hero (+ sample shortlist card on A) | Offer in one breath: finalists in 7 days, $1,997 flat, 45-day replacement — CTA above the fold |
| Stat strip / ticker | Scannable value equation (7 days, $1,997, 45-day, $0 ongoing) |
| "Every other way" / "Stupid money" | Pain + price anchor: agencies, HireLATAM $3,500, platforms, DIY — struck through vs $1,997 |
| 7-day sprint | Time + effort collapse: "90 minutes of your time," one line per day |
| Value stack + tier strip | Itemized agency billing ($4,900+) and HireLATAM ($3,500) struck through → $1,997; tiers + volume pricing |
| Guarantee | Risk reversal in two sentences |
| FAQ / objection one-liners | Top objections incl. salary range and operator credibility |
| Book section | 4-field form — the single conversion point |

Every section ends in the same CTA. Mobile gets a persistent sticky bottom bar with the same action.
