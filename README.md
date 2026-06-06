# SD Flag Initiative

A simple static site for the South Dakota flag redesign proposal and public vote.

## What’s in the repo

- `index.html` - main page
- `sd_flag_swypr.html` - swipe/story version of the site
- `assets/` - flag images and shared data used by both pages
- `CNAME` - custom domain configuration for GitHub Pages

## Local use

Open `index.html` in a browser, or serve the folder with any static file server.

## Updating images

- Put new image files in `assets/`
- Update the file paths in `assets/sd_flag_data.js` if the image names change
- Keep the asset names in sync with the files referenced in the HTML

## Publishing

This site is set up for GitHub Pages. After making changes:

```bash
git add -A
git commit -m "Update site"
git push
```

If you are doing a full reset of the branch from local files, use the force-push flow you already used:

```bash
git add -A
git commit -m "Fresh start with new files"
git push -u --force origin main
```

