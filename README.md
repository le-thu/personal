Source for [thu-le.com](https://thu-le.com). Plain HTML and CSS with a few small scripts. No framework, no build step, no dependencies. Hosted on Cloudflare Pages.

## Run locally

Serve the folder with any static server. Opening `index.html` directly over `file://` will not work because all asset paths are root-relative (`/css/styles.css`).

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Structure

```
index.html        homepage
about.html        about page
now/              Now updates, one page per month plus an index, images in now/images
blog/             blog posts, one HTML file per post, images in blog/images
links.html        links page
blogroll.html     blogs I read
uses.html         tools I use
css/styles.css    the only stylesheet
js/theme.js       light/dark theme toggle
js/collage.js     draggable photo collage on the Now page
js/analytics.js   Umami events
fonts/            self-hosted Mona Sans (variable woff2)
assets/           favicon, social preview image, about photo
feed.xml          RSS feed, hand-maintained
sitemap.xml       sitemap, hand-maintained
llms.txt          summary of the site for AI crawlers
changelog.html    notable site changes over the years
404.html          not found page
robots.txt        crawler rules
```

## Good to know

- All colors are OKLCH custom properties in `:root`, with `light-dark()` for themes. No `theme-color` meta tags. Browser UI follows `color-scheme` and the page background.
- Icons are inline SVG, no icon files. The section separator and list bullets are SVGs drawn as CSS masks in `styles.css`.
- Images are kept at 1600px longest edge, WebP at quality 80, under 500KB.

## License

Code (HTML, CSS, JS) is free to use and adapt. Written content, photos, and other images are mine and not licensed for reuse. Fonts are under their own license: [Mona Sans](https://github.com/github/mona-sans), SIL Open Font License.
