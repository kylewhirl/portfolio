# Kyle Worrall Portfolio

Modern portfolio built with Next.js App Router, TypeScript, Tailwind, shadcn/ui, and Magic UI-inspired animations.

## Setup

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Build

```bash
npm run build
npm run start
```

## Deployment (Vercel)

- Push to GitHub and import the repo in Vercel.
- Framework preset: Next.js
- Build command: `npm run build`
- Output: `.next`

## Content Editing

### Add a project

1. Edit `src/content/projects.ts` and add a new entry to the `projects` array.
2. Add optional screenshots to `public/projects/` and reference them in the `screenshots` field.

### Add a post

1. Add a new MDX file in `src/content/writing/`.
2. Add the post metadata and slug to `src/content/writing.ts`.

## Tech Stack

- Next.js App Router (TypeScript)
- Tailwind CSS + shadcn/ui
- Magic UI-inspired animation components
- MDX for writing
