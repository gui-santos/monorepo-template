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

- inside ./packages create two folders ./ui-lib and ./app

- in ./app start a nextjs project (link to docs)

- in ./ui-lib start a storybook project (link to docs)
- react is a peer dependency because we want whoever is consuming the lib to define react's version

- lerna bootstrap

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
