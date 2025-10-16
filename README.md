# Phos Systems — Single Page Website

A fast, modern single-page site for hardware/physical product consulting by Nico Schlüter. Includes responsive UI, SEO, structured data, and a working consultation form.

## Structure
- `index.html` — main page with sections: Hero, Services, Process, Solutions, About, Contact
- `assets/styles.css` — responsive design and components
- `assets/script.js` — mobile nav, smooth scroll, form UX, UTM capture, thank-you state
- `assets/favicon.svg` — favicon/logo mark

## Local Preview
You can simply open `index.html` in a browser, or serve locally to test redirects:

- Python (recommended):
  ```bash
  python3 -m http.server 8080
  ```
  Then visit http://localhost:8080

## Contact Form
The form posts to FormSubmit to email `info@phos.systems`.

- First-time setup: submit the form once to trigger FormSubmit's verification email to `info@phos.systems` and confirm. After that, submissions will deliver normally.
- Anti-bot: a honeypot field is included, and `captcha` is disabled for smoother UX.
- Redirect: the `_next` URL is set dynamically to `#thanks` on the current origin so the thank-you state works in local and production.

### Netlify Forms (optional alternative)
If you deploy to Netlify and want to use Netlify Forms instead of FormSubmit:
1. Keep `name="consultation"` and hidden `form-name` input.
2. Remove the `action` attribute from the `<form>` tag so it posts to your own site.
3. Deploy. Netlify will auto-detect the form. You can view submissions in the Netlify dashboard.

## Deployment Options

- Netlify (easy):
  - Drag and drop this folder in Netlify, or connect a Git repo.
  - Set the custom domain to `phos.systems` (adjust DNS to Netlify's records) and enforce HTTPS.

- GitHub Pages:
  - Push to a GitHub repo, enable Pages (root or `/docs`).
  - Optional: add a `CNAME` file with `phos.systems` and point DNS to GitHub Pages.

- Other static hosts: Cloudflare Pages, Vercel (static), S3+CloudFront, etc. Just upload the files.

## SEO & Social
- Update Open Graph/Twitter image at:
  - `og:image` in `index.html` currently points to `https://phos.systems/og-image.jpg`.
  - Recommended size: 1200×630. Add this image on your host or change the URL to your chosen path.
- Edit `<title>` and `<meta name="description">` in `index.html` as needed.

## Customization
- Colors/type: adjust CSS variables at the top of `assets/styles.css`.
- Copy: edit sections in `index.html` — hero, services, process, solutions, about.
- Icons: the service cards use emoji; swap for SVGs if preferred.

## Legal/Privacy
- The form includes an explicit contact consent checkbox. If needed, add a Privacy Policy link and page.

## Company details
- Domain: phos.systems
- Email: info@phos.systems
- Phone: +43 667 62851874
- Name: Nico Schlüter
- Address: Augasse 15, AT-2273 Hohenau an der March
- Registered as: "Nico Schlüter Technical Consulting" (confirmed)

---
Questions or changes? Open `index.html` and `assets/styles.css` and I’ll guide updates.
