# [![CLEVER Logo](https://raw.githubusercontent.com/imperodesign/skeleton/master/app/assets/src/img/skeleton-logo.png?raw=true)](http://cleverframework.io/) Clever Framework

CLEVER is a framework helping you build web applications quickly. It is designed to give you a quick and organized way to start developing node.js based web apps with useful modules like Mongoose and Passport pre-bundled and configured.

## Prerequisite Technologies
* [io.js](https://iojs.org)
* [MongoDB](http://www.mongodb.org)
* [Git](http://git-scm.com)

## Prerequisite packages

* CLEVER currently has not prerequisite packages

## Installation
To start with CLEVER install the `clever-cli` package from NPM.
This will add the *clever* command which lets you interact (install, manage, update ...) your Clever based application.

### Install the CLEVER CLI

```
$ npm install -g clever-cli
$ clever init <myApp>
```

### Compiling packages
If you wish to (re)compile the clever packages manually, run:
```
$ sh make
```

### Running clever
To run clever just run from your terminal:
```
$ npm start
```

Alternatively, (and for production environments) you can run:
```
$ iojs --harmony app/server
```

Then, open a browser and go to:
```
http://localhost:3000
```
