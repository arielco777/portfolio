# Ariel Cohen · Portfolio

An interactive, Windows 98-inspired portfolio: boot sequence, desktop icons, draggable / resizable windows,
a Start menu and taskbar. Built with React 19, TypeScript, Tailwind CSS v4 and Vite.

Live: https://ariel-cohen-portfolio.vercel.app

## Develop

```bash
npm install
npm run dev      # http://localhost:3000  (add -- --host to test on a phone)
npm run build
npm run lint
```

## Editing content

- `src/content/profile.ts`: name, summary, contact, experience, education, skills, CV file
- `src/content/projects.ts`: projects (appear in Start ▸ Programs ▸ Projects and the Projects folder)
- `src/apps/registry.ts`: every desktop icon / window and its order

## Deep links

`#/about`, `#/resume`, `#/cv`, `#/projects/<id>`, `#/quick-view` (plain one-page résumé)
