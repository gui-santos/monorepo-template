# Monorepo Template

In this repo you find a template to start monorepos with two packages. One is a UI Library with React and Storybook for the creation of components. The other one is a Next.js app that consumes the library. Both packages are already set to use typescript. To manage both, we use Lerna.

### Things in this Template

- Lerna
- Next.js
- Storybook
- Typescript
- ESlint + Prettier
- Jest + React-testing-library

# How this was done

Create a folder and name it "monorepo" for example. Then inside of the directory run:

```
git init
yarn init
```

> We are using yarn here because we will take advantage of [yarn's workspaces](https://classic.yarnpkg.com/en/docs/workspaces/)

You can accept all the default options, but it is very important to add the following to your package.json

```json
{
  "private": true
}
```

### Adding Lerna

Lerna has a series of commands that will help us to manage and publish our packages.
To set it up, in the root folder, run:

```
yarn add lerna -D
```

And after installing the dependency, run:

```
yarn lerna init
```

This will create a `lerna.json` file with some default configurations. Make sure to set `version` to `independent`(this will make versioning of your packages independent from each other) and packages should be set to `packages/*`(this way everytime you create a package, lerna will already be aware of it). And since we want to use yarn workspaces, set `useWorkspaces` to true

```json
{
  "packages": ["packages/*"],
  "version": "independent",
  "npmClient": "yarn",
  "useWorkspaces": true
}
```

Also because yarn workspaces, we need to update our package.json in the root with:

```json
{
  "workspaces": ["packages/*"]
}
```

Now, to get things started, create inside of `./packages` two folders: one called `ui-lib` and other one called `consumer-app`. Your folder structure should look something like this at this point:

```
/monorepo
  /packages
    /consumer-app
    /ui-lib
```

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

# References

- https://dev.to/shnydercom/monorepos-lerna-typescript-cra-and-storybook-combined-4hli
- https://josephluck.co.uk/blog/next-typescript-monorepo

- Storybook: https://blog.crowdbotics.com/setup-a-react-app-with-typescript-storybook-and-crowdbotics/
- Next.js: https://nextjs.org/learn/excel/typescript

# Next steps

- Add styled-components to the library

