# Vela AI Chatbot

This is a Next.js site exported as static files and deployed to Render.
The `render.yaml` Blueprint and GitHub Actions workflow are at the repository
root, alongside the `doc/` and `my-app/` folders.

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

## Deploy to Render

The root-level `render.yaml` configures a Render Static Site to build from
`my-app/` and publish the generated `out/` directory. The `doc/` folder is not
part of the deployed site. GitHub Actions runs lint and build checks for pull
requests and pushes to `main`.

To create the Render site, push this configuration to GitHub, then in Render
choose **New → Blueprint**, connect this repository, and deploy the Blueprint.
In the deployed service's settings, set **Auto-Deploy** to **After CI Checks
Pass** if Render should wait for GitHub Actions before deploying each update.

If the production branch is not `main`, update the branch in
`.github/workflows/ci-cd.yml` and select the same branch when connecting the
Blueprint.

The canonical site URL used for metadata is centralized in `lib/site-url.ts`.

## SEO files

Next.js generates `sitemap.xml` and `robots.txt` from `app/sitemap.ts` and
`app/robots.ts`. Update `lib/site-url.ts` if the canonical domain changes.
