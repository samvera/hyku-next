# Samvera Static Site Template (featuring Hyku)

This repo is a [Next.js](https://nextjs.org/) static site project providing information about the Hyku application and ecosystem. It will be a static site that will be deployed on Github Pages.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment

This site will be deployed on to Github Pages as a static site. To do a local build of the site, run:

```bash
pnpm build
```

### IMPORTANT

_Please ensure that, before pushing any commits which introduce changes to the site, that you run the following:_

```bash
npx prettier --write .
```

_Failure to do so may result in your changes not being deployed to the production website._

## Testing

This site will be tested using [Playwright](https://playwright.dev/docs). Tests are located in the `tests` directory. To run tests, run:

```bash
# Run tests in headless mode
pnpm test

# Run tests in interactive UI mode
pnpm test:ui
```

## Code Quality

To ensure code quality, this site will use ESLint and Prettier. To format project code locally, run:

```bash
pnpm format
```
