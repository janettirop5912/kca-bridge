# KCA Campus Systems

This repository contains two separate KCA systems. The queue management system remains independent from the emergency management system.

## Files
- `index.html` - main app
- `icon.svg` - KCA logo branding
- `manifest.webmanifest` - PWA metadata
- `sw.js` - service worker for caching

## Emergency management system
- `emmergency-management-system.html` - student emergency report and SOS form
- `security-dashboard.html` - security response dashboard
- `supabase-config.js` and `supabase-schema.sql` - optional shared incident storage

## GitHub Pages setup
1. Create a GitHub repository.
2. Upload these files to the repo root.
3. Go to Settings > Pages.
4. Set Source to `Deploy from a branch`.
5. Select `main` and `/root`.
6. Save.

Your site will publish at:
`https://<your-username>.github.io/<your-repo-name>/`

## Editing in GitHub
You can edit files directly in GitHub and commit them. GitHub Pages will update automatically.

## Local preview
Open `index.html` for the queue management system, or `emmergency-management-system.html` for the separate emergency system. You can run either with a simple local server from the project folder.
