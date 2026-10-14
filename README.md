# Maison Coco — Savoir Vivre

Next.js App Router · React · TypeScript · Tailwind CSS · GSAP / ScrollTrigger.

## Run

`npm install` then `npm run dev`. `npm run build` creates the static site in `out/`.

## Content and routes

Bosnian is the default. The English version is at `/en/`. All page content, catalogue entries and location information are in `content/site.ts`. Shared components live in `components/`. Product browsing and product dialogs, mobile navigation and interactive location selection work without a server. The map only loads after a visitor requests it. Phone and directions links are functional. No order or inquiry submission is simulated.

## Research and design

Reference inspected: https://bernicebakery.com/ — full-bleed photographic hero, oversized grotesque typography, circular CTAs, expressive product images, high-contrast section rhythms and enormous footer wordmark. This interpretation uses Maison Coco's real rooster logo, product cutouts and cream/butter/terracotta palette rather than Bernice assets.

Official content and original photographs retrieved 13 October 2026:
- https://maisoncoco.ba/ — brand, artisan approach; values section states 2012, tradition section separately states supplier status since 2013. Copy uses the 2012 bakery history.
- https://maisoncoco.ba/francuski-pekarski-proizvodi/
- https://maisoncoco.ba/jutarnja-peciva/
- https://maisoncoco.ba/slatka-peciva-poslastice-i-torte%E2%80%8B/
- https://maisoncoco.ba/tartovi-i-kolaci/
- https://maisoncoco.ba/sendvici/
- https://maisoncoco.ba/salate/
- https://maisoncoco.ba/catering/ — catering line +387 62 332 406.
- https://maisoncoco.ba/kontakt/ — six listed branches, addresses, phone numbers and opening hours. Kolodvorska has no street number in the source, so none is invented. Opening hours are attributed and visitors are advised to call for holiday changes.

Images under `public/images/` are from Maison Coco's official site for this commissioned redesign concept; brand/content ownership remains with Maison Coco. No Bernice images are used. Do not assume a third-party stock license. Before an independent public launch, the client should confirm asset use and branch information. No prices are invented. The gallery uses official photos; a social handle is not guessed. Current deployment is a private preview and includes noindex metadata.

Typography: Bricolage Grotesque, DM Sans and Cormorant Garamond, self-hosted from Google Fonts.

## Design tokens

Butter #F2D56B; cream #FAF5E9; espresso #24201D; terracotta #B9583F; caramel #B77C43; ivory #FFFDF7. Accessible focus indicators, semantic navigation, native dialog focus handling, reduced-motion support, local assets and lazy below-fold loading are included.
