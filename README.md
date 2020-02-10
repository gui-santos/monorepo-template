## Monorepo Template

In this repo you find a template to start monorepos with two packages. One is a UI Library with React and Storybook for the creation of components. The other one is a Next.js app that consumes the library. Both packages are already set to use typescript. To manage both, we use Lerna.

### Things in this Template

- Lerna
- Next.js
- Storybook
- Typescript

## How this was done

- set up a new project: `git init` and `yarn init`
- **IMPORTANT** in package.json, `private` needs to be set to true

```json
// package.json
{
  "private": true
}
```

- `yarn add lerna -D`
- then run `yarn lerna init`
- make sure the version is 'independent' otherwise all the packages will need to be published at the same time

```json
// lerna.json
{
  "packages": ["packages/*"],
  "version": "independent",
  "npmClient": "yarn",
  "useWorkspaces": true
}
```

- since we are going to use yarn workspaces, we need to update package.json with:

```json
// package.json
{
  "workspaces": ["packages/*"]
}
```

- inside ./packages create two folders ./ui-lib and ./consumer-app

### Creating the UI Library

- in ./ui-lib start a storybook project (link to docs)
- react is a peer dependency because we want whoever is consuming the lib to define react's version
- name it @monorepo/ui-lib

```
yarn add -P react react-dom
```

- add storybook for react as a devDependency

```
yarn add -D @storybook/react @storybook/addon-actions
```

- storybook needs babel so let's add it as devDependency

```
yarn add -D babel-loader @babel/core
```

- follow storybook docs https://storybook.js.org/docs/guides/guide-react/ until step 3

- `yarn add -D typescript awesome-typescript-loader`

- set ts.config and webpack config in ./.storybook/main.js

- create a component and its stories using the folder structure src/components/Button

- change package.json

```json
"main": "./lib/index.js",
"types": "./lib/index.d.ts",
```

- run the `yarn tsc` this will create the ./lib

- `yarn lerna bootstrap`

### Creating the consumer app

- in ./consumer-app start a nextjs project with ts https://nextjs.org/learn/excel/typescript
- name it @monorepo/consumer-app in package.json

### Import the Button from the library in your app

- add the lib in the app dependencies

```json
"@monorepo/ui-lib": "*",
```

- `yarn lerna add @monorepo/ui-lib` in the root

- import the component in the app

Done!

## References

- https://dev.to/shnydercom/monorepos-lerna-typescript-cra-and-storybook-combined-4hli
- https://josephluck.co.uk/blog/next-typescript-monorepo

- Storybook: https://blog.crowdbotics.com/setup-a-react-app-with-typescript-storybook-and-crowdbotics/
- Next.js: https://nextjs.org/learn/excel/typescript

## Next steps

- Jest and tests in the ui-lib
- add styled-components
- set up prettier and ESLint

@typescript-eslint/eslint-plugin @typescript-eslint/parser eslint eslint-config-prettier eslint-plugin-jsx-a11y eslint-plugin-prettier eslint-plugin-react
