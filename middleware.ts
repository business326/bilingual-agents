/**
 * Vercel Routing Middleware — landing page traffic splitter.
 *
 * This repo is a plain static site (no framework, no package.json). Vercel's
 * Routing Middleware is framework-agnostic, so a `middleware.ts` at the project
 * root runs on the Edge runtime ahead of the static file lookup. Deliberately
 * dependency-free: no `@vercel/functions` import, so nothing needs installing
 * and the deploy stays a pure static upload.
 *
 * Behaviour: a request for "/" is 302'd to one of the landing variants,
 * weighted. The assignment is stored in a 30-day cookie so a returning visitor
 * keeps seeing the same page — otherwise a visitor who bounces and comes back
 * would be counted twice under two different variants and the test data would
 * be worthless.
 *
 * To change the weights or switch the splitter off, edit SPLIT below. See the
 * "Traffic splitter" section of README.md.
 */

// ---------------------------------------------------------------------------
// Config — the only thing you normally need to edit.
// ---------------------------------------------------------------------------

const SPLIT = {
  enabled: true,
  variants: {
    // 2026-08-10: /pitch-c rotated OUT (engagement 24.2% vs /pitch 41.9%,
    // n=62/74, p≈0.03 — the confirmed loser). /pitch-d rotated IN: the
    // mobile-first challenger. Cookie-holders of a removed variant re-roll
    // automatically on their next visit.
    // 2026-08-18: /pitch-b KILLED under gate (b). Since launch (07-26..08-17)
    // /pitch engaged 43.1% (47/109) vs /pitch-b 29.7% (27/91) — z=1.96,
    // one-sided p≈0.025 — corroborated by form-start rate 4/109 vs 0/91 and
    // Clarity active time ~46s/session vs ~12s/session (friction zero on both:
    // disinterest, not breakage). Cookie-holders re-roll on next visit.
    // 2026-08-18: /pitch-e LAUNCHED into the freed slot — clone of leader
    // /pitch encoding two learnings: (1) the win is desktop-only (49.2% vs
    // 35.6% mobile on /pitch), so ≤760px gets a short lede, tighter hero,
    // pricing-first section order and an earlier sticky CTA while desktop
    // renders identically; (2) the WhatsApp FAB (second contact path) is
    // removed for single-CTA purity. Hypothesis: hold desktop, lift mobile
    // engagement above ~30%.
    // 2026-08-23: 5pt tilt /pitch-d -> /pitch. Since-launch engagement 45.4%
    // (54/119) vs 36.1% (13/36) - 9.2pp gap at the 30-session checkpoint the
    // 08-21 run pre-committed to. LAGGING, not kill-ready (z=0.98, p~0.16).
    // 2026-08-25: another 5pt tilt /pitch-d -> /pitch. Gap widened to 11.3pp
    // (45.5% 55/121 vs 34.2% 13/38), z=1.22, one-sided p~0.11. Still LAGGING,
    // not kill-ready: gate (b) needs 60 sessions/arm (22 to go) and no
    // corroborating friction/form-start delta yet (Clarity friction zero on
    // both arms). /pitch-d keeps 23 to finish its verdict.
    // 2026-08-28: double tilt toward the leader. /pitch-d gap widened again to
    // 15.3pp since-launch (45.1% 60/133 vs 29.8% 14/47), z=1.84, one-sided
    // p~0.033 — would clear gate (b)'s p<0.10 with corroboration (Clarity
    // active time 9s vs 32s/session), but sits at 47/60 sessions, so the kill
    // waits; -8 pts to the floor of 15 (gap >12pp warranted 10, floor binds).
    // /pitch-e slipped to LAGGING: 34.3% (12/35), 10.9pp behind — in the
    // 8-12pp band, -5 pts. Its mobile-lift hypothesis is not showing yet
    // (mobile 33.3% vs /pitch 57.1% since 08-18, n tiny).
    '/pitch': 57,
    '/pitch-d': 15,
    '/pitch-e': 28,
  },
} as const;

/** Where all traffic goes when `enabled` is false. Kept on the current
 *  engagement leader — was '/pitch-c' until it lost the three-way test. */
const FALLBACK = '/pitch';

/** Cookie holding the assigned variant. 30 days, in seconds. */
const COOKIE = 'ba_variant';
const COOKIE_MAX_AGE = 60 * 60 * 24 * 30;

// Only ever run on the bare root. Everything else — the variant pages
// themselves, /thank-you, /booked, the keyword landing pages, /logo.png,
// /og.png, /robots.txt, /sitemap.xml — is never seen by this function.
// The exact-match guard in the handler is a second, independent line of
// defence: matcher semantics are Vercel's, the pathname check is ours, and a
// redirect loop needs BOTH to fail.
export const config = {
  matcher: '/',
};

// ---------------------------------------------------------------------------

type VariantPath = keyof typeof SPLIT.variants;

const VARIANT_PATHS = Object.keys(SPLIT.variants) as VariantPath[];

/**
 * Weighted pick. Weights are normalised by their own sum rather than assumed to
 * total 100, so editing one number without rebalancing the others still yields
 * a valid distribution instead of silently starving the last variant.
 */
function pickVariant(): VariantPath {
  const weights = VARIANT_PATHS.map((p) => Math.max(0, SPLIT.variants[p]));
  const total = weights.reduce((a, b) => a + b, 0);
  if (total <= 0) return FALLBACK as VariantPath;

  let roll = Math.random() * total;
  for (let i = 0; i < VARIANT_PATHS.length; i++) {
    roll -= weights[i];
    if (roll < 0) return VARIANT_PATHS[i];
  }
  return VARIANT_PATHS[VARIANT_PATHS.length - 1]; // float rounding guard
}

/** Read the assigned variant, ignoring any value not in the current config. */
function readCookie(request: Request): VariantPath | null {
  const header = request.headers.get('cookie');
  if (!header) return null;

  for (const part of header.split(';')) {
    const eq = part.indexOf('=');
    if (eq === -1) continue;
    if (part.slice(0, eq).trim() !== COOKIE) continue;

    const value = decodeURIComponent(part.slice(eq + 1).trim());
    // A variant that has since been renamed or removed must not pin the visitor
    // to a page that no longer exists — fall through and re-assign instead.
    return (VARIANT_PATHS as string[]).includes(value)
      ? (value as VariantPath)
      : null;
  }
  return null;
}

export default function middleware(request: Request): Response | undefined {
  const url = new URL(request.url);

  // Exact match only. "/" and nothing else.
  if (url.pathname !== '/') return undefined;

  let destination: string;
  let setCookie = false;

  if (!SPLIT.enabled) {
    // Kill switch: everyone goes to one page. The cookie is neither read nor
    // written, so existing assignments survive intact and re-enabling the
    // split puts returning visitors back on the variant they already saw.
    destination = FALLBACK;
  } else {
    const assigned = readCookie(request);
    destination = assigned ?? pickVariant();
    setCookie = assigned === null;
  }

  // Carry the full query string through untouched. gclid / gbraid / wbraid must
  // survive or Google Ads cannot tie the conversion back to the click, and the
  // Conversion Linker on the destination page has nothing to store.
  const location = destination + url.search + url.hash;

  const headers = new Headers({
    Location: location,
    // The response varies per visitor, so it must never be served from a shared
    // cache. Without this the CDN could pin every visitor to whichever variant
    // was rolled first, and the split would quietly stop splitting.
    'Cache-Control': 'no-store, must-revalidate',
    Vary: 'Cookie',
  });

  if (setCookie) {
    headers.append(
      'Set-Cookie',
      `${COOKIE}=${encodeURIComponent(destination)}; Path=/; Max-Age=${COOKIE_MAX_AGE}; SameSite=Lax; Secure`,
    );
  }

  // 302, never 301: a 301 is cached by the browser more or less permanently,
  // which would freeze that visitor on one variant even after the weights
  // change or the splitter is turned off.
  // Built by hand rather than via Response.redirect() because that helper
  // returns a response with immutable headers, so the cookie could not be set.
  return new Response(null, { status: 302, headers });
}
