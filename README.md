# [![CLEVER Logo](https://raw.githubusercontent.com/imperodesign/skeleton/master/app/assets/src/img/skeleton-logo.png?raw=true)](http://cleverframework.io/) Clever Framework

CLEVER is a framework helping you build web applications quickly. It is designed to give you a quick and organized way to start developing node.js based web apps with useful modules like Mongoose and Passport pre-bundled and configured.

## Prerequisite Technologies
* [Node.js](http://nodejs.org/)
* [MongoDB](http://www.mongodb.org)
* [Git](http://git-scm.com)

## Prerequisite packages

* CLEVER currently works with gulp
```
$ npm install -g gulp
// and bower
$ npm install -g bower
```

## Installation
To start with CLEVER install the `clever-cli` package from NPM.
This will add the *clever* command which lets you interact (install, manage, update ...) your Clever based application.

### Install the CLEVER CLI

```bash
$ npm install -g clever-cli
$ clever init <myApp>
$ cd <myApp> && npm install
```

### Invoke node with a task manager
Clever supports the gulp task runner for various services which are applied on the code.
To start you application run -
```bash
$ gulp
```

Alternatively, when not using `gulp` (and for production environments) you can run:
```bash
$ node server
```
Then, open a browser and go to:
```bash
http://localhost:3000
