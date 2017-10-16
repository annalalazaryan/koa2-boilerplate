'use strict'

const GreetingsModel = require('../models/greetings_model')

/**
 * greetingsController is module for bla bla bla
 *
 * @example
 * const greetingsCtrl = require('greetingsCtrlPath');
 * greetingsCtrl.greet()
 *
 * @namespace module:controllers~greetingsController
 * @type {Object}
 * @version v0
 * @variation v0
 */
const controller = {}
module.exports = controller

/**
 * greetingsController.greet
 *
 * @param {object} ctx - ctx object of KOA which contains request data.
 * @param {object} ctx.params - Query object of KOA request.
 * @param {object} ctx.params.type - Type of greet ('birthday', 'newYear').
 * @param {object} ctx.query - Params object of KOA request.
 * @param {object} ctx.query.receiver - Greetings receiver.
 * @returns {string}
 *
 * @desc Spread greetings.
 *
 * @memberOf! module:controllers~greetingsController(v0)
 * @public
 */
controller.greet = async (ctx, next) => {
	const reqData = ctx.request.body
	const params = ctx.params

	const greetingsInst = new GreetingsModel(reqData)
	let result = await greetingsInst.save()

	if (result.err) {
		ctx.throw(result.status, result.err)
	}

	ctx.status = 200
	ctx.body = `Happy ${params.type} ${result.receiver}. `
}

/**
 * greetingsController.getGreetings
 *
 * @param {object} ctx - ctx object of KOA which contains request data.
 * @param {object} ctx.params - Query object of KOA request.
 * @param {object} ctx.params.id - Id of greet. If not specified returns all greeting
 * @param {object} ctx.query - Params object of KOA request.
 * @returns {array} [{"_id":"59e31d34722ff4139f258b62","receiver":"Ashot","__v":0}]
 *
 * @desc Get all greetings.
 *
 * @memberOf! module:controllers~greetingsController(v0)
 * @public
 */
controller.getGreetings = async (ctx, next) => {
	const params = ctx.params

	let result = await GreetingsModel.get(params.id)

	ctx.status = 200
	ctx.body = result
}
