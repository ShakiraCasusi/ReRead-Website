## ReRead Website

A small multi-page site (landing + shop + cart + checkout) built as a foundation for further development and testing of UI components, responsive layout, and checkout logic.

---

## Project Overview

**Re;Read** is an online marketplace for quality second-hand books tailored mainly for students but open to all readers. It solves the problem of expensive new textbooks and limited affordable options by making gently used books easy to find, buy, and sell. Re;Read adds value by offering a trusted, budget-friendly, and sustainable alternative to buying new books — searchable by course level, genre, and condition — so students and readers can access affordable reading material without sacrificing quality.

---

## Project Structure

- [index.html](index.html) — Landing / homepage
- pages/
  - [pages/shop.html](pages/shop.html) — Shop listing
  - [pages/cart.html](pages/cart.html) — Cart page
  - [pages/signin.html](pages/signin.html) — Sign-in page
  - pages/about.html, pages/sell.html — additional pages (see notes)
- styles/ — project CSS (loads after Bootstrap where present)
- scripts/
  - [scripts/shop.js](scripts/shop.js) — shop listing logic
  - [scripts/checkout.js](scripts/checkout.js) — checkout + PH location handling
  - [scripts/main.js](scripts/main.js) — global UI scripts
- ph-locations.json — Philippines regions dataset used by checkout (fetched by [scripts/checkout.js](scripts/checkout.js))
- images/ — image assets

---

## Recent Changes (October 2025)

- **Header & Navigation Refactor**:
  - Refactored the header to be fully responsive and consistent across all pages.
  - Ensured a single-line mobile header with the logo on the left, and cart/hamburger icons on the right.
  - Standardized mobile icon order to always be Cart, then the Hamburger menu.
- **UI & Component Standardization**:
  - Replaced custom-styled book card buttons with Bootstrap button classes (`.btn`, `.btn-dark`) for better maintainability and consistency.
  - Unified the cart badge logic across all pages to use the `hidden` attribute, improving JavaScript interaction and fixing update bugs on the index page.
- Implemented dynamic checkout location selector using a PH regions dataset (`ph-locations.json`) and updated checkout logic in scripts/checkout.js.
- **Code Quality & Consistency**:
  - Cleaned up redundant CSS and consolidated responsive header styles into `main.css`.
  - Ensured all pages, including the homepage, share the same navigation structure for a consistent user experience.

---

## How To Run Locally

1. Open this folder in VS Code or your editor.
2. Use Live Server (recommended) or open index.html directly in a browser.
   - If using Live Server: right-click `index.html` → "Open with Live Server".
3. For full checkout testing, serve the project from an HTTP server (Live Server or Apache) so fetch()/relative paths work correctly.

Windows PowerShell quick start (from project root):

- Live Server: use the VS Code extension.
- To delete old batchfile docs (local cleanup), run the removal command provided below.

---

## HTML Integration

- All primary pages are standard HTML5 and include structured sections for header, main content, and footer.
- Entry points: index.html, pages/shop.html, pages/cart.html.

---

## CSS Integration

- Project uses custom stylesheet files in styles/ loaded after Bootstrap (where Bootstrap is present) so custom rules override base utility styles.
- Keep custom CSS files loaded after the CDN Bootstrap CSS to ensure proper override order.

---

## JavaScript Integration (+ PH regions JSON)

- scripts/ contains page-specific JS:
  - scripts/shop.js — book listing and UI interactions.
  - scripts/checkout.js — initializes PH locations, populates region/province/city/barangay selects, and manages order totals. It fetches the local dataset: `ph-locations.json`.
- Checkout expects the PH regions dataset at ph-locations.json. If you move scripts, update the fetch path in scripts/checkout.js.

---

## Bootstrap Integration (Current State)

- Bootstrap 5.3.2 CDN is integrated into the main pages:
  - ✅ index.html — Bootstrap CSS & JS included.
  - ✅ pages/shop.html — Bootstrap CSS & JS included.
  - ✅ pages/cart.html — Bootstrap CSS & JS included.
  - Partial/needs-check: pages/signin.html — includes Bootstrap JS; confirm CSS link present.
  - ✅ pages/cart.html — Bootstrap CSS & JS included.

---

## Notes & Housekeeping

- Batchfile documentation folder removed from project repository to reduce clutter.
- Test across browsers (Chrome, Firefox, Edge) and on mobile widths after CSS/Bootstrap updates. (Needed to be checked/reviewed)
- Keep custom CSS loaded after Bootstrap to preserve design overrides.

---

## VS Code Extensions Used

- **Live Server** (ritwickdey.LiveServer)
- **Prettier** - Code formatter (esbenp.prettier-vscode)
- **Auto Rename Tag** (formulahendry.auto-rename-tag)
- **IntelliSense for CSS class names in HTML** (Zignd.html-css-class-completion)
- **HTML CSS Support** (ecmel.vscode-html-css)
- **Better Comment** - Comment formatter for clean comments

---

## Acknowledgments

I would like to thank the following people and resources for their valuable guidance and support in my web development journey:

- **SDPT Solutions (YouTube)**
- **W3Schools**
- **StackOverflow** - some devs insights/quick tutorials in the comments
- **Felix Macaspac (TikTok Dev Content Creator, FrontEnd Dev)** — tips and best practices using HTML/CSS/JS.
- **Bryl Lim (TikTok Dev Content Creator, FullStack Dev)** — tips and best practices.
- **Rics (TikTok Dev Content Creator, Cloud Engineer)** — tips and best practices.
- **PaulSong213 (GitHub)** — ph-locations dataset
- **Lebron Piraman** — assistance with [book].png URL links finding in G00gle scripts/shop.js.

Their insights and educational content helped me gain a deeper understanding of web development concepts and best practices.

---

## Developer's Note

- **Developer:** Shakira Casusi
- **Focus:** FrontEnd Dev
- **Date:** October 2025
- **Project Status:** ---
