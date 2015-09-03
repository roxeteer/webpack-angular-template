# Webpack + Angular.js application template

Simple template for an Angular.js application. Uses
[Webpack](http://webpack.github.io/) and `npm` scripts.

Features:

* Angular + ui-router + Restangular
* ES6 (compiled with Babel)
* SASS/SCSS + Autoprefixer
* Unit testing with Karma/Jasmine/PhantomJS

## Installation

```bash
$ npm install
```

## Run in development

```bash
$ npm run dev
```

By default, the server runs at [http://localhost:8080](http://localhost:8080).

To use different port, run it with:

```bash
$ npm run dev -- --port 8081
```

## Create deployment package

```bash
# $ rm -rf dist
$ npm run build
```

The files are created in the `dist/` directory.

## Running unit tests

```bash
$ npm test
```
