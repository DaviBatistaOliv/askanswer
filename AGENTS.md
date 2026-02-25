# AskAnswer Development Guide

AskAnswer is a Q&A web application (Stack Overflow-like) with an Angular 12 front-end and NestJS 8 back-end using GraphQL and SQLite.

## Cursor Cloud specific instructions

### Architecture

| Service | Port | Tech |
|---------|------|------|
| Back-end API | 3000 | NestJS 8 + GraphQL (Apollo) + SQLite via TypeORM |
| Front-end | 4200 | Angular 12 + Angular Material + Bootstrap 5 |

The SQLite database is file-based at `back-end/data/askanswer.db` — no external database services needed.

### Node.js version

This project requires **Node.js 16** (Angular 12 and the NestJS 8 toolchain are incompatible with Node 18+). The update script handles installing Node 16 via `nvm`.

### Running services

- **Back-end:** `cd back-end && npx nest start --watch` (port 3000). GraphQL Playground available at `http://localhost:3000/graphql`.
- **Front-end:** `cd front-end && npx ng serve --host 0.0.0.0 --port 4200 --disable-host-check` (port 4200).

### Lint and tests

- **Back-end lint:** `cd back-end && npx eslint "{src,apps,libs,test}/**/*.ts"` — has pre-existing warnings/errors (6 errors, 6 warnings).
- **Back-end tests:** `cd back-end && npx jest` — most test suites fail due to a pre-existing Jest module resolution issue (absolute `src/...` imports work with TypeScript but not with Jest's default resolver; no `moduleNameMapper` is configured).
- **Front-end lint:** Not configured. Would require `ng add @angular-eslint/schematics`.
- **Front-end tests:** `cd front-end && npx ng test --browsers=ChromeHeadless --watch=false` — fails due to a pre-existing issue: the `test` architect target in `angular.json` is missing `stylePreprocessorOptions.includePaths: ["src/style"]` (which the `build` target has).

### Known pre-existing issues

1. **Back-end Jest tests** don't resolve absolute path imports (`src/resources/...`). The `tsconfig.json` sets `baseUrl: "./"` but Jest has no corresponding `moduleNameMapper`.
2. **Front-end Karma tests** fail because the test config doesn't include the SCSS `includePaths` that the build config defines.
3. **`createQuestion` mutation** returns a null ID error — a pre-existing bug in the questions service.
4. The `.env` file has a typo: `SECRET_KAY` instead of `SECRET_KEY`.

### Package manager

Both sub-projects have `yarn.lock` files — use `yarn install` for dependency installation. The `angular.json` also specifies `"packageManager": "yarn"`.
