# Jesse Langley — Official Website (Bootstrap 5)

HTML5 + CSS3 + JavaScript, built with Bootstrap 5.3 (included locally in `assets/vendor/`, no CDN needed).
Pages: Home, About, Journey, Videos, Gallery, Contact, 404.

## Pictures — how to change any of them
All pictures live in `assets/images/` with the exact names you gave (including the childhood photos and logos).
Open `assets/js/config.js`:
- `img: { heroHome: "1.jpg", ... }` — change the file name next to a key to put a different picture in that spot.
- `childhood: [...]` — the About-page childhood photos and their captions.
- `gallery: [...]` — the Gallery page order.
- `pos: { heroHome: "center 20%" }` — fine-tune the crop of any picture.
- Logos: `logoHeader`, `logoFooter`, `favicon`. Cut-out portrait: `portrait`. Award: `award`.
If a picture is missing, the spot shows a dark gradient instead of a broken image.

## Videos
`config.js` → `shorts`: paste any YouTube Shorts link. Edit the titles there too.

## Contact form
Already connected to Formspree: `https://formspree.io/f/mdeejynv`. Confirm your email in the Formspree dashboard.

## Things to confirm with the client
- Prestige Award: add its name, year and who gave it (home page, search `PLACEHOLDER`).
- Real social profile URLs in `config.js` → `platforms` (currently each platform's homepage).
- Replace `YOUR-USERNAME` / `YOUR-REPO` in each page's `<head>`, `sitemap.xml` and `robots.txt`.

## Deploy on GitHub Pages
Upload everything (with `index.html` at the root) → Settings → Pages → Deploy from a branch → `main` / root → Save.
Site address: `https://USERNAME.github.io/REPO/`.
