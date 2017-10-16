// - - - - - - - - - - - - - - - - Greetings Router - - - - - - - - - - - - - - - - -  //                                                                                 
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //

'use strict'

const Router = require('koa-router')
const greetingsRouter = new Router()

const greetingsCTRL = require('../controllers/greetingsCTRL')
const greetingsSch = require('../validations/greetings_schemes')
const validate = require('../validations/index')

// ** Routes start

greetingsRouter.post('/greetings/:type',
	validate('params', greetingsSch.greet.params),
	validate('body', greetingsSch.greet.body),
	greetingsCTRL.greet)

greetingsRouter.get('/greetings',
	greetingsCTRL.getGreetings)

greetingsRouter.get('/greetings/:id',
	validate('params', greetingsSch.getGreetings.params),
	greetingsCTRL.getGreetings)

module.exports = greetingsRouter
