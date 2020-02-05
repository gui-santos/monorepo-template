## Monorepo Template

### Things in this Template

- Lerna

### How to create a similar monorepo?

- set up a new project: `git init` and `yarn init`
- **IMPORTANT** in package.json, `private` needs to be set to true

```json
// package.json
{
  // ...
  "private": true
}
```

- `yarn add lerna -D`
- then run `yarn lerna init`

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
  // ...
  "workspaces": ["packages/*"]
}
```

- inside ./packages create two folders ./ui-lib and ./consumer-app

### UI-Lib

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

### Consumer app

- in ./consumer-app start a nextjs project with ts https://nextjs.org/learn/excel/typescript
- name it @monorepo/consumer-app in package.json

* lerna bootstrap ????????????????

### WIP

- add typescript to nextjs (docs)

- add typescript to ui-lib (articles links)
- do the configuration webpack madness

- create a component in the ui-lib

- consume it in the app

- Voilá!

### Next steps

- set up prettier and ESLint

### References

Starting a Monorepo:

- https://dev.to/shnydercom/monorepos-lerna-typescript-cra-and-storybook-combined-4hli
- https://josephluck.co.uk/blog/next-typescript-monorepo

- Storybook: https://blog.crowdbotics.com/setup-a-react-app-with-typescript-storybook-and-crowdbotics/
- Next.js: https://nextjs.org/learn/excel/typescript
