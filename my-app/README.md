# Vela AI Chatbot

This is a Next.js site exported as static files and deployed to GitHub Pages.
No Docker or deployment secrets are required.

## Local development

```bash
npm ci
npm run dev
```

Before opening a pull request, run:

```bash
npm run lint
npm run build
```

## Claude → GitHub → production

The workflow in `.github/workflows/ci-cd.yml` runs lint and builds the static
site on pull requests to `master`. After changes are merged and pushed to
`master`, a separate deployment job publishes the exact built artifact to
GitHub Pages. Deployment only starts after the build job succeeds.

To enable publishing, connect the repository to GitHub Pages and choose
**Settings → Pages → Build and deployment → Source → GitHub Actions**. Change
`master` in the workflow if the repository uses a different production branch.

GitHub Actions sets the Pages base path while building, so project sites hosted
under `https://<owner>.github.io/<repository>/` work without manually changing
the application links.

The production site URL used for canonical metadata is centralized in
`lib/site-url.ts`.

## SEO files

Next.js generates `sitemap.xml` and `robots.txt` from `app/sitemap.ts` and
`app/robots.ts`. Update `lib/site-url.ts` if the canonical domain changes.
