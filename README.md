# Cam Launcher

A modern, dark-themed launcher website built with React (Vite), Tailwind CSS, and React Router.

## Getting Started

```bash
npm install
npm run dev
```

Then open the printed local URL (usually http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview
```

## Pages

- `/` — Home
- `/download` — Download versions with search + latest badge
- `/changelog` — Update history
- `/login` — Admin sign-in (not linked from the navbar)
- `/admin` — Admin dashboard (protected)
- `/admin/downloads` — Manage downloads (add/edit/delete)
- `/admin/changelog` — Manage changelog (add/edit/delete)
- `/admin/settings` — Site settings

## Demo Admin Login

```
Username: cambo
Password: Ss998877$
```

Visit `/login` directly (there is no visible Login button anywhere on the site).

## Notes

- Auth session is stored in `localStorage` and provided via React Context (`src/context/AuthContext.jsx`).
- Downloads and changelog data are seeded with defaults and persisted to `localStorage` so admin edits survive refreshes. In a production deployment you would swap `src/data/*.js` for real API calls.
- Fonts: Noto Sans Khmer (body) + Rajdhani (display/headings) loaded from Google Fonts in `index.html`.
