# 📦 Material Design with Webpack Boilerplate

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

![Screenshot](https://repository-images.githubusercontent.com/353857455/3e4d0980-ae68-11eb-9e6b-4f3f8ac2dd6f 'Screenshot')

> Webpack 5 with Material UI Components Boilerplate. Compilation contains basic Material template. Package is using Babel, PostCSS and Sass with a hot dev server. The project is fully configured and ready to generate the final production process.

> Beside of that boilerplate basic template has implemented bunch of useful features like:

- custom font,
- custom icons,
- scroll to top,
- partials templates contains independent contents
  > Global partial modules like:
- analytics (soon)
- hero section (soon),
- footers,
- header contains desktop and **mobile navigation** supported with **Headroom.js** feature.

> Sample template contains **Accordion Module** & **Swiper Module** - features fully compatible witch other Material components.

#### Working **DEMO** available at [mdpack.vajracode.net](https://mdpack.vajracode.net/)

## Installation

Clone this repo and npm install.

```bash
git clone https://github.com/parys-github/material-webpack-boilerplate.git
```

Instal required **NPM** modules

```bash
npm i
```

## Usage

### Development server

```bash
npm start
```

You can view the development server at `localhost:8080`.

### Production build

```bash
npm run build
```

> Note: Install [http-server](https://www.npmjs.com/package/http-server) globally to deploy a simple server.

```bash
npm i -g http-server
```

You can view the deploy by creating a server in `dist`.

```bash
cd dist && http-server
```

### Basic Knowledge Base

- [`How to setup Webpack 5 - from Scratch`](https://abhimanyuchauhan-61309.medium.com/webpack-5-9256d45f7b83)
- [`Webpack Official Homepage`](https://webpack.js.org/)
- [`Material Web Components`](https://material.io/components?platform=web)
- [`NPM WEB COMPONENTS`](https://github.com/material-components/material-components-web/tree/master/packages)
- [`Material Layout Grid`](https://material.io/develop/web/supporting/layout-grid)
- [`Material Responsive Grid`](https://material.io/design/layout/responsive-layout-grid.html#columns-gutters-and-margins)
- [`Web Components Catalog`](https://material-components.github.io/material-components-web-catalog/#/)
- [`Web Components Usage`](https://material.io/components)
- [`Material Icons Library`](https://material.io/resources/icons/?style=baseline)

## Dependencies

### Webpack

- [`webpack`](https://github.com/webpack/webpack) - Modules bundler.
- [`webpack-cli`](https://github.com/webpack/webpack-cli) - Command line interface for Webpack
- [`webpack-dev-server`](https://github.com/webpack/webpack-dev-server) - Development server for Webpack
- [`webpack-merge`](https://github.com/survivejs/webpack-merge) - Simplify development/production configuration
- [`cross-env`](https://github.com/kentcdodds/cross-env) - Cross platform configuration

### Babel

- [`@babel/core`](https://www.npmjs.com/package/@babel/core) - Transpile ES6+ to backwards compatible JavaScript
- [`@babel/plugin-proposal-class-properties`](https://babeljs.io/docs/en/babel-plugin-proposal-class-properties) - Use properties directly on a class (an example Babel config)
- [`@babel/preset-env`](https://babeljs.io/docs/en/babel-preset-env) - Smart defaults for Babel

### Loaders

- [`babel-loader`](https://webpack.js.org/loaders/babel-loader/) - Transpiling files with Babel and Webpack
- [`sass-loader`](https://webpack.js.org/loaders/sass-loader/) - Load SCSS and compile to CSS
- [`node-sass`](https://github.com/sass/node-sass) - Node Sass
- [`postcss-loader`](https://webpack.js.org/loaders/postcss-loader/) - Process CSS with PostCSS
- [`postcss-preset-env`](https://www.npmjs.com/package/postcss-preset-env) - Sensible defaults for PostCSS
- [`css-loader`](https://webpack.js.org/loaders/css-loader/) - Resolve CSS imports
- [`style-loader`](https://webpack.js.org/loaders/style-loader/) - Inject CSS into the DOM

### Plugins

- [`clean-webpack-plugin`](https://github.com/johnagan/clean-webpack-plugin) - Remove/clean build folders
- [`copy-webpack-plugin`](https://github.com/webpack-contrib/copy-webpack-plugin) - Copy files to build directory
- [`html-webpack-plugin`](https://github.com/jantimon/html-webpack-plugin) - Generate HTML files from template
- [`mini-css-extract-plugin`](https://github.com/webpack-contrib/mini-css-extract-plugin) - Extract CSS into separate files
- [`css-minimizer-webpack-plugin`](https://webpack.js.org/plugins/css-minimizer-webpack-plugin/) - Optimize and minimize CSS assets

### Additional modules

- [`Accordion`](https://www.npmjs.com/package/accordion) - Silky-smooth accordion widget
- [`Audio.js`](https://kolber.github.io/audiojs/) - Modern Audio Player widget
- [`Headroom.js`](https://www.npmjs.com/package/headroom.js) - Lightweight, high-performance JS widget
- [`Swiperjs`](https://swiperjs.com/) - Most modern mobile touch slider

### Linters

- [`eslint`](https://github.com/eslint/eslint) - Enforce style guide across application
- [`eslint-config-airbnb-base`](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base) - Base styleguide to enforce rules
- [`eslint-config-prettier`](https://github.com/prettier/eslint-config-prettier) - Implement prettier rules
- [`eslint-plugin-import`](https://github.com/benmosher/eslint-plugin-import) - Implement import rules
- [`eslint-plugin-prettier`](https://github.com/prettier/eslint-plugin-prettier) - Dependency for prettier usage with ESLint
- [`eslint-import-resolver-webpack`](https://github.com/benmosher/eslint-plugin-import/tree/master/resolvers/webpack) - Throw exceptions for import/export in webpack
- [`eslint-webpack-plugin`](https://github.com/webpack-contrib/eslint-webpack-plugin) - ESLint configuration for webpack
- [`prettier`](https://github.com/prettier/prettier) - Dependency for `prettier-webpack-plugin` plugin
- [`prettier-webpack-plugin`](https://github.com/hawkins/prettier-webpack-plugin) - Prettier configuration for webpack

## Images - free placeholders comes from:

- [https://picsum.photos/](https://picsum.photos/)
- [https://unsplash.com/](https://unsplash.com/)

### Project directory structure

```
├── .git/                   # git repo
│   └── ...
├── config/                 # Webpack configuration directory
│   ├── paths.js            # Global paths setup
│   ├── webpack.common.js   # Default Webpack configuration file
│   ├── webpack.dev.js      # Development build configuration file
│   └── webpack.prod.js     # Production build configuration file
├── dist/                   # Build directory
│   └── ...
├── node_modules/           # Node library
│   └── ...
├── public/                 # Static assets directory
│   └── ...
├── src/                    # Project source files
│   ├── fonts/              # Custom fonts
│   │   └── ...
│   ├── img/                # Image assets
│   │   ├── icons/          # Custom icons
│   │   └── ...
│   ├── js/                 # JavaScript files
│   │   └── ...
│   ├── scss/               # Sylesheet files
│   │   └── ...
│   └── views/              #
│       ├── content/        # Content (html)
│       │   └── ...
│       ├── partials/       # Partials (html) modules
│       │   ├── components  # Partials (html components)
│       │   └── ...
│       ├── templates/      # Pages templates
│       │   └── ...         #
│       └── ...
├── .babelrc.json           # Presets and plugins conf
├── .eslintrc.json          # Conf linting rules file
├── .gitignore              # Defaulr ignore
├── .prettierrc.json        # Prettier formatting rules
├── LICENSE                 # MIT License (MIT)
├── package.json            # Required modules packages
├── postcss.config.js       # Styles transforming conf
└── README.md               # Project instruction
```

## License

This project is open source and available under the [MIT License](LICENSE).
