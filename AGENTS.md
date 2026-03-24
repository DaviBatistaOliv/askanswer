# AGENTS.md

## Cursor Cloud specific instructions

### Project overview

AskAnswer is a Stack Overflow-style Q&A platform with two independent services in a monorepo (no workspace manager):

| Service | Directory | Port | Dev command |
|---------|-----------|------|-------------|
| Back-end (NestJS + GraphQL + TypeORM + SQLite) | `back-end/` | 3000 | `yarn start:dev` |
| Front-end (Angular 12 + Material) | `front-end/` | 4200 | `yarn start` |

### Node.js version

Both projects require **Node.js 16.x** (Angular 12 is incompatible with Node 18+). The environment uses nvm:

```
source ~/.nvm/nvm.sh && nvm use 16
```

### Running services

Start the back-end first (the front-end depends on it for GraphQL API calls):

```bash
cd /workspace/back-end && yarn start:dev   # port 3000
cd /workspace/front-end && yarn start      # port 4200
```

GraphQL Playground is available at `http://localhost:3000/graphql`.

### Lint, test, build

| Task | Back-end (`back-end/`) | Front-end (`front-end/`) |
|------|----------------------|------------------------|
| Lint | `yarn lint` | No lint target configured (no `@angular-eslint`) |
| Test | `yarn test` | `yarn test` (Karma/Jasmine, needs Chrome) |
| Build | `yarn build` | `yarn build` |

### Known pre-existing issues

- **Back-end Jest tests fail** due to absolute `src/` imports (e.g. `import { X } from 'src/resources/...'`) not resolving in Jest. The NestJS runtime and build work fine because `tsconfig.json` has `baseUrl: "./"`. This is a missing `moduleNameMapper` in the Jest config — not caused by environment setup.
- **`QuestionsService.create()`** calls `repository.create()` (in-memory only) instead of `repository.save()`, so questions are not persisted to the DB.
- The auth system uses a hardcoded access token (`'aaa'`) and plaintext password comparison.
- The front-end `onLogin()` method in `login.component.ts` is empty (not implemented).

### Database

SQLite file-based database at `back-end/data/askanswer.db`. No external DB server needed.

### Environment file

`back-end/.env` contains `SECRET_KAY=askanswer` (already committed; the typo "KAY" vs "KEY" is pre-existing).
