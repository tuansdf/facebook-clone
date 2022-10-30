# Facebook Clone

- This is an attemp to clone many features of [Facebook](https://www.facebook.com/) for educational purposes

- [ ] News Feed
- [ ] Friends
- [ ] Wall
- [ ] Timeline
- [ ] Likes and Reactions
- [ ] Comments
- [ ] Messages and inbox
- [ ] Notifications
- [ ] Groups

## What's inside?

This turborepo uses [npm](https://www.npmjs.com/) as a package manager. It includes the following packages/apps:

### Apps and Packages

- `web`: a Preact web app
- `server`: a NestJS server
- `ui`: a stub React component library shared by both `web` and `docs` applications
- `eslint-config-custom`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `tsconfig`: `tsconfig.json`s used throughout the monorepo

### Utilities

This turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

### Build

To build all apps and packages, run the following command:

```
cd facebook-clone
npm run build
```

### Develop

To develop all apps and packages, run the following command:

```
cd facebook-clone
npm run dev
```
