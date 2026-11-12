# Anthony Trama's portfolio

This is a static Astro site deployed to GitHub Pages. The `deploy` workflow
builds the site and publishes `dist/` whenever changes are pushed to `main` or
`master`.

## Local development

```sh
pnpm install
pnpm dev
```

Create and preview a production build with:

```sh
pnpm build
pnpm preview
```

The Medium RSS feed is fetched while building the site because Medium does not
allow browser requests from this site through CORS. Local development uses
sample posts. If Medium's feed is unavailable during a production build, the
build logs an error and the page still publishes its link to Medium.

## GitHub Pages setup

In the repository's **Settings → Pages**, set the source to **GitHub Actions**.
The workflow handles building and deploying the site. The custom domain is
`www.anthonytrama.com`; `public/CNAME` is included in the published files.
