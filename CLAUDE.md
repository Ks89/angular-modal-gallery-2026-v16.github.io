# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the official documentation website for the `@ks89/angular-modal-gallery` library (v15). It's an Angular 21 application showcasing the library's features through 48+ interactive demo components.

## Commands

```bash
# Development
npm start                  # Serve locally (dev mode)
npm run build:dev          # Development build
npm run build:prod         # Production build
npm run build:release      # GitHub Pages release build (sets base href), but then you need to manually copy the `dist/` folder content into `docs/` folder

# Testing
ng test                    # Run tests with Karma/Jasmine

# Cleanup
npm run clean              # Cache verify + delete dist
npm run clean:dist         # Delete dist folder only
```

No linting is configured (no ESLint/Prettier).

## Architecture

### Routing & Pages (`src/app/`)

- `app.routes.ts` — Main routing config; all pages are **lazy-loaded**
- `app.config.ts` — Application providers and configuration
- `app.component.ts` — Root component with accordion initialization

**Pages** (`src/app/pages/`):
- `home/`, `getting-started/`, `features/`, `about/`, `migration/`, `not-found/`
- `demo/` — 48+ demo components (e.g., `carousel-*`, `modal-autoplay-*`, `previews-*`), each showing a different library configuration with live CodeMirror code examples

### Shared (`src/app/shared/`)

- `components/` — navbar, footer, intro-header, sidebar-demo, sidebar-features, table-image, table-libconfig
- `images.ts` — Central image data definitions used across demos

### Core (`src/app/core/`)

- `services/accordion.service.ts` — Accordion open/close state
- `services/title.service.ts` — Page title management
- `services/ui.service.ts` — UI state management
- `services/storage.util.ts` — LocalStorage utilities
- `module-import-guard.ts` — Prevents CoreModule double-import

### Styling

- `src/styles.scss` — Global styles
- `src/theme/` — SCSS theme variables (included as a path in `angular.json`)
- `src/_variables.scss` — SCSS variables

### CodeMirror

- `src/app/pages/codemirror.config.ts` — Shared CodeMirror 6 configuration used by demo pages to display source code

### Environments

- `src/environments/environment.ts` — Development
- `src/environments/environment.prod.ts` — Production
- `src/environments/environment.release.ts` — Release (GitHub Pages)

## Key Patterns

- **Standalone components** throughout (Angular 21 modern style)
- All pages are lazy-loaded via `loadComponent` / `loadChildren` in `app.routes.ts`
- Demo pages follow a consistent pattern: show the component with a CodeMirror code block
- The `@ks89/angular-modal-gallery` library itself is a peer dependency (`^16.0.0`) — this repo only documents it, not implements it

## Build Output

- Dev/prod builds: `dist/angular-modal-gallery-docs/`
- Release build (`build:release`) outputs with `--base-href /angular-modal-gallery/` for GitHub Pages deployment; the `docs/` folder in the repo contains the pre-built site
