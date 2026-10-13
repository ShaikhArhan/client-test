# Claude instructions

- This Next.js site is statically exported and hosted on GitHub Pages.
- Do not add Docker, Cloudflare, or server-only features that break static
  export.
- Before handing off changes, run `npm run lint` and `npm run build`.
- Work on a feature branch and open a pull request targeting `master`.
- GitHub Actions builds and checks pull requests. After merge to `master`, it
  deploys the already-built artifact to GitHub Pages.
- Never say a change is in production until the GitHub Pages deployment job
  succeeds.
- The canonical website origin is set in `lib/site-url.ts`.