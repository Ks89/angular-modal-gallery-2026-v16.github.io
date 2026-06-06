# AGENTS.md

This file provides guidance to AI agents when working with code in this repository.

## Project Overview

This is the official documentation website for the `@ks89/angular-modal-gallery` library v16. It is an Angular 22 application showcasing the library through 49 interactive demo components.

## Commands

```bash
# Development
npm start                  # Alias for npm run serve:dev
npm run serve:dev          # Serve locally with the development configuration
npm run serve:prod         # Serve locally with the production configuration

# Builds
npm run build:dev          # Development build
npm run build:dev:stats    # Development build with stats JSON
npm run build:prod         # Production build, deleting the previous output path
npm run build:prod:stats   # Production build with stats JSON
npm run build:release      # GitHub Pages release build with base/deploy URL /angular-modal-gallery-2026-v16.github.io/

# Testing
npm test                   # Not configured as an npm script
ng test                    # Run Angular unit tests with the Vitest runner

# Cleanup
npm run clean              # Verify npm cache, then delete dist
npm run clean:dist         # Delete dist
npm run clean:coverage     # Delete coverage
npm run clean:docs         # Delete lib-docs
```

No linting is configured in `package.json` (no ESLint/Prettier scripts).

## Architecture

### Routing & Pages (`src/app/`)

- `app.routes.ts` - Main routing config. Page components are lazy-loaded with `loadComponent`; feature and demo child routes are imported from route files.
- `app.config.ts` - Application providers and configuration.
- `app.component.ts` - Root component with accordion initialization.

**Pages** (`src/app/pages/`):

- `home/`, `getting-started/`, `features/`, `about/`, `migration/`, `not-found/`
- `demo/` - 49 demo components, such as `carousel-*`, `modal-autoplay-*`, `previews-*`, and `plain-gallery-*`, each showing a different library configuration with live CodeMirror code examples.

### Shared (`src/app/shared/`)

- `components/` - Navbar, footer, intro header, demo/features sidebars, and table components.
- `images.ts` - Central image data definitions used across demos.

### Core (`src/app/core/`)

- `core.module.ts` - Core Angular module.
- `services/accordion.service.ts` - Accordion open/close state.
- `services/title.service.ts` - Page title management.
- `services/ui.service.ts` - UI state management.
- `services/storage.util.ts` - LocalStorage utilities.
- `services/services.ts` - Service barrel exports.
- `module-import-guard.ts` - Prevents CoreModule double-import.

### Styling

- `src/styles.scss` - Global styles.
- `src/theme/` - SCSS theme variables, included through `stylePreprocessorOptions.includePaths` in `angular.json`.
- `src/_variables.scss` - SCSS variables.

### CodeMirror

- `src/app/pages/codemirror.config.ts` - Shared CodeMirror 6 configuration used by demo pages to display source code.

### Environments

- `src/environments/environment.ts` - Default/development environment.
- `src/environments/environment.prod.ts` - Production environment.
- `src/environments/environment.release.ts` - Release/GitHub Pages environment.
- `src/environments/environment.hmr.ts` - HMR environment file.

## Key Patterns

- Standalone components are used throughout the app.
- Top-level pages are lazy-loaded in `app.routes.ts`; feature and demo sections use child route arrays from their own route files.
- Demo pages follow a consistent pattern: render a configured gallery example and show related source code through CodeMirror.
- The `@ks89/angular-modal-gallery` library is consumed as a dependency (`^16.0.0`); this repository documents it rather than implementing the library itself.
- The project uses Angular's `@angular/build:application`, `@angular/build:dev-server`, and `@angular/build:unit-test` builders.

## Build Output

- Dev/prod/release builds output to `dist/angular-modal-gallery-docs/`.
- `npm run build:release` builds with both `--base-href` and `--deploy-url` set to `/angular-modal-gallery-2026-v16.github.io/` for GitHub Pages deployment.
- The `docs/` folder contains the pre-built GitHub Pages site when present; release builds do not automatically copy `dist/` into `docs/`.
