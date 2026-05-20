# Annapurna Restaurant

A polished static restaurant website for Annapurna, a family kitchen in Kharghar, Navi Mumbai. The site presents the restaurant story, full menu, offers, reviews, reservations, and contact details in a fast GitHub Pages-friendly setup.

## Live Site

```text
https://ashishkoli14.github.io/Annapurna-Restaurant/
```

## Features

- Responsive restaurant homepage with hero, featured dishes, reviews, offers, and ordering links
- Full menu page with category navigation, search, and veg / non-veg filtering
- About, reservations, reviews, offers, and contact sections
- English, Hindi, and Marathi language toggle
- Hash-based routing for GitHub Pages compatibility
- Static deployment with no build step required

## Tech Stack

- HTML
- CSS
- React 18 via CDN
- Babel Standalone for JSX in the browser
- GitHub Pages for hosting

## Project Structure

```text
.
|-- index.html              # App entry point and CDN scripts
|-- styles.css              # Global styling and responsive layout
|-- app.jsx                 # Hash router and app shell wiring
|-- shell.jsx               # Header, footer, language provider
|-- data.jsx                # Menu, reviews, images, offers, translations
|-- page-home.jsx           # Home page sections
|-- page-menu.jsx           # Menu search, filters, and categories
|-- page-about.jsx          # About page
|-- page-reservations.jsx   # Reservations page
|-- page-others.jsx         # Reviews, offers, and contact pages
|-- tweaks-panel.jsx        # Local visual tweak controls
```

## Run Locally

Because this project uses browser-loaded JSX files, serve the folder from a local static server instead of opening `index.html` directly.

```powershell
python -m http.server 4173 --bind 127.0.0.1
```

Then open:

```text
http://127.0.0.1:4173/
```

## Deploy To GitHub Pages

1. Push the repository to GitHub.
2. Open the repository settings.
3. Go to **Pages**.
4. Set the source to the `main` branch and root folder.
5. Save and wait for GitHub Pages to publish.

Important: asset paths in `index.html` use relative paths like `./styles.css` so the site works correctly from the repository subpath on GitHub Pages.

## Notes

- The site currently depends on CDN-hosted React, ReactDOM, Babel, Google Fonts, and Unsplash images.
- For a production-grade version, the next step would be adding a build tool such as Vite so JSX is compiled before deployment.
