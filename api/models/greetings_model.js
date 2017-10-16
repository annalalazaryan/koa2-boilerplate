'use strict'

const Mongoose = require('mongoose')
const Schema = Mongoose.Schema

/**
 * Create mongoose schema for greetings
 *
 * @constructor module:models~greetingsModel
 */
const GreetingsScheme = new Schema({
	'receiver': {
		type: String,
		required: true
	}
})

/* ----------------------------- Custom Methods -------------------------------- */
/* ----------------------------------------------------------------------------- */
// You can place custom methods here by adding them in schema object or in model

/**
 * greetingsModel.get
 *
 * @desc Get all greetings or one of them if id specified .
 *
 * @memberOf! module:models~greetingsModel
 *
 * @param {string} id - greeting id
 * @returns {Query|*}
 * @public
 */
GreetingsScheme.statics.get = async (id) => {
	const conditions = id ? {_id: Mongoose.Types.ObjectId(id)} : {}
	const fields = {}
	const properties = {}

	return greetingsModel.find(conditions, fields, properties)
}

const greetingsModel = Mongoose.model('Greetings', GreetingsScheme)
module.exports = greetingsModel
