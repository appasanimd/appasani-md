# Appasani MD — Website

A complete, self-contained static website. Nothing to install, no database, no build
step — it's plain HTML, CSS, and JavaScript that any web host can serve directly.

-------------------------------------------------------------------------------
WHAT'S IN THIS FOLDER
-------------------------------------------------------------------------------
- index.html ................ Homepage
- about.html ................ About Dr. Appasani
- services.html ............. Services overview
- conditions.html ........... Conditions treated
- neuromodulation.html ...... Neuromodulation / TMS
- contact.html .............. Contact + consultation request form
- locations.html ............ Locations hub (5 states + global)
- writing.html .............. Writing / Substack
- global-second-opinion.html  Worldwide second-opinion service
- concierge-psychiatry-*.html  Location landing pages (SEO)
- tms-*, integrative-*, psychedelic-*  Service landing pages (SEO)
- 404.html .................. "Page not found" page
- styles.css, site.js ....... Shared design system + behavior
- image-slot.js, tweaks-*.jsx  Interactive helpers
- assets/ ................... Photographs
- robots.txt, sitemap.xml ... Search-engine files

-------------------------------------------------------------------------------
HOW TO PUT IT ONLINE (easiest options, no coding)
-------------------------------------------------------------------------------
Option A — Cloudflare Pages or Netlify (free, drag-and-drop):
  1. Create a free account at pages.cloudflare.com or netlify.com.
  2. Choose "Deploy / Add site" and DRAG THIS WHOLE FOLDER onto the upload area.
  3. It goes live in under a minute on a temporary address.
  4. In the site's Domain settings, add your domain (appasanimd.com) and follow
     the prompts to point your DNS. Done.

Option B — Any traditional web host (GoDaddy, Bluehost, etc.):
  1. Open your host's File Manager or connect by FTP.
  2. Upload the CONTENTS of this folder into the public web root
     (usually called public_html or www).
  3. Visit your domain — index.html loads automatically as the home page.

-------------------------------------------------------------------------------
BEFORE YOU LAUNCH — A FEW NOTES
-------------------------------------------------------------------------------
- Custom domain: the pages already reference https://www.appasanimd.com in their
  SEO tags, so pointing that domain here needs no edits.

- Contact form: the consultation form opens the visitor's email app addressed to
  info@appasanimd.com (no server required). If you'd prefer it to submit silently
  in the background, a form service like Formspree can be wired in — ask and it
  can be set up.

- Photos: the Presidio images are tasteful stand-ins. When your real office photos
  are ready, replace the matching files inside the assets/ folder (keep the same
  file names) and re-upload — no other changes needed.

- The small "Tweaks" design panel is a preview-only tool and stays hidden from
  visitors on a live site. It can be stripped out entirely for a lighter, faster
  page load — recommended before a high-traffic launch.

-------------------------------------------------------------------------------
© 2026 Appasani MD. Built for Dr. Raghu Appasani.
