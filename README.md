# Project Boilerplate

Boilerplate using GraphQL (Apollo Server/Client), React, and React Native.

## Basic Setup

- Yarn - package manager w/ workspaces enabled
- TSlint - linting for ts files
- Prettier - styling
- EditorConfig - syncing workspace settings

**Note**: Waiting for [prettier-tslint](https://github.com/azz/prettier-tslint) support for the [Prettier VS Code plugin](https://github.com/prettier/prettier-vscode). See [PR](https://github.com/prettier/prettier-vscode/pull/414). Current solution is that prettier does it's default formating, then tslint runs it's fix, this means the final result uses the config provided to tslint.

### Editor: VS Code

Required extensions:

- [EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfi)
- [ESlint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

#### Linting & styling

A combination of Prettier and TSLint is used for linting and styling. Prettier uses the default configuration. TSLint uses the following combination of configurations:

- `tslint:recommended`
- `tslint-eslint-rules` - uses the rules from ESlint
- `tslint-config-prettier` - plays better with prettier

For react:

- `tslint-react`

### Scripts

Run using yarn like so: `yarn <script>`

- `start:web` - starts the web server
- `start:mobile` - starts react native packager
- `start:api` - starts the api server
- `dev:api` - starts the api server in dev mode (nodemon)
- `build:web` - builds the react web app
- `build:api` - builds the api

### Files

- `.vscode` - configuration for vscode
- `api` - api server
- `mobile` - react native app
- `web` - react app
