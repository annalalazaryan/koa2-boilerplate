/**
 * @module app
 */

'use strict'

/** Create KOA app */
const Koa = require('koa')
const app = new Koa()

const BodyParser = require('koa-body') /** @const  BodyParser   Middleware for accessing json. */
const Logger = require('koa-logger') /** @const  Logger       Middleware for logging. */
const ResponseTime = require('koa-response-time') /** @const  ResponseTime X-Response-Time middleware. */

// ** Load Configs 
app.context.configs = require('./configs/index')

// ** Connect Middlewares  
app.use(ResponseTime())
app.use(Logger())
app.use(BodyParser())

// ** Error Handler 
app.use(async (ctx, next) => {
	try {
		await next()
	} catch (err) {
		console.log('error handler', err)
		ctx.status = err.status || 500
		ctx.body = { error: err.message || err }
	}
})

// ** Load Libraries
const mongooseConnect = require('./libs/mongooseConnect')
const authorization = require('./libs/authorization')

// ** Mongoose connect 
mongooseConnect(app.context.configs)

//** authorize
app.use(authorization)

// ** Load Routers 
const mainRouter = require('./api/routes/main_router')
const greetingsRouter = require('./api/routes/greetings_router')

// ** Connect Routers 
app.use(mainRouter.routes())
app.use(greetingsRouter.routes())

// ** Create server
const server = app.listen(app.context.configs.port).on('error', err => {
	console.log('App error handler', err.status, err.message)
})

module.exports = server
