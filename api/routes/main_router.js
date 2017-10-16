// - - - - - - - - - - - - - - - - Main Router - - - - - - - - - - - - - - - - -  //                                                                                 
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //

'use strict'

const Router = require('koa-router')
const mainRouter = new Router()

// ----------- Rotes start ----------- //

mainRouter.get('/', async ctx => {
	ctx.status = 200
	ctx.body = 'Congratulations, connection established ...  \n'
})

mainRouter.get('/info', async ctx => {
	ctx.status = 200
	ctx.body = 'Info ...  \n'
})

module.exports = mainRouter
