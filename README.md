# koa2-api-boilerplate

Boilerplate for building APIs with [koa2](https://github.com/koajs/koa/tree/v2.x) and mongodb.

This project covers basic necessities of most APIs.
* Database (mongoose) (http://mongoosejs.com/)
* Testing (mocha, chai) (https://mochajs.org/, http://chaijs.com/)
* Doc generation with jsdoc (http://usejsdoc.org/)
* Linting using standard eslint (https://eslint.org/)

## Requirements
* node __^7.0.0__
* npm __^4.0.0__
* mongodb  

## Installation
```bash
git clone https://github.com/annalalazaryan/koa2-boilerplate.git
```
## Setup
```bash
npm install
```

## Features
* [koa2](https://github.com/koajs/koa/tree/v2.x)
* [koa-router](https://github.com/alexmingoia/koa-router)
* [koa-body](https://github.com/dlau/koa-body)
* [koa-logger](https://github.com/koajs/logger)
* [MongoDB](http://mongodb.org/)
* [Mongoose](http://mongoosejs.com/)
* [Mocha](https://mochajs.org/)
* [Chai] (http://chaijs.com/)
* [jsdoc](http://usejsdoc.org/)
* [ESLint](http://eslint.org/)

## Structure
```
├── app.js                   # Bootstrapping and entry point   
├── config                   # Server configuration settings and environment config
│   ├── development.json
│   ├── staging.json
│   ├── production.json
│   └── index.js             # Exports config based on environment 
├── src                      # Source code
│   ├── controllers			 # Controllers	
│   ├── models               # Mongoose models
│   ├── routes            	 # Implemented routes
│   └── validations       		 # Directory for validation files
│   	├── schemes					 # Joi validation schemes	
│   	└── index.js				 # Exports validate function
├── tests                    # Unit tests
├── libs                     # Libraries
├── services                 # Services
└── docs                     # Generated docs

```

## Usage
* `npm start` Start application
* `npm run docs` Generate API documentation
* `npm run lint` Run lint
* `npm test` Run test cases

## Documentation
API documentation generated by [jsdoc](http://usejsdoc.org/).

Visit `http://localhost:3000/docs/` to view docs

# koa2-api-boilerplate

Boilerplate for building APIs with [koa2](https://github.com/koajs/koa/tree/v2.x) and mongodb.

This project covers basic necessities of most APIs.
* Database (mongoose) (http://mongoosejs.com/)
* Testing (mocha, chai) (https://mochajs.org/, http://chaijs.com/)
* Doc generation with jsdoc (http://usejsdoc.org/)
* Linting using standard eslint (https://eslint.org/)

## Requirements
* node __^7.0.0__
* npm __^4.0.0__
* mongoDb 
* pm2 istalled globally

##
```bash
npm install pm2 -g
```

## Installation
```bash
git clone https://github.com/annalalazaryan/koa2-boilerplate.git
```
## Setup
```bash
npm install
```

## Features
* [koa2](https://github.com/koajs/koa/tree/v2.x)
* [koa-router](https://github.com/alexmingoia/koa-router)
* [koa-body](https://github.com/dlau/koa-body)
* [koa-logger](https://github.com/koajs/logger)
* [MongoDB](http://mongodb.org/)
* [Mongoose](http://mongoosejs.com/)
* [Mocha](https://mochajs.org/)
* [Chai] (http://chaijs.com/)
* [jsdoc](http://usejsdoc.org/)
* [ESLint](http://eslint.org/)


## Structure
```
├── app.js                   # Bootstrapping and entry point   
├── config                   # Server configuration settings and environment config
│   ├── development.json
│   ├── staging.json
│   ├── production.json
│   └── index.js             # Exports config based on environment 
├── src                      # Source code
│   ├── controllers			 # Controllers	
│   ├── models               # Mongoose models
│   ├── routes            	 # Implemented routes
│   └── validations       		 # Directory for validation files
│   	├── schemes					 # Joi validation schemes	
│   	└── index.js				 # Exports validate function
├── tests                    # Unit tests
├── libs                     # Libraries
├── services                 # Services
└── docs                     # Generated docs

```

## Usage
* `npm start` Start application
* `npm run docs` Generate API documentation
* `npm run lint` Run lint
* `npm test` Run test cases

## Documentation
API documentation generated by [jsdoc](http://usejsdoc.org/).

You can find generated files in /docs directory


 
