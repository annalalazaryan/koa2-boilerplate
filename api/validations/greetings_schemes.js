'use strict'

const Joi = require('joi')
const schemes = {}

schemes.greet = {
	params: {
		'type': Joi.string().alphanum().min(3).max(30).required()
	},
	body: {
		'receiver': Joi.string().required()
	}
}

schemes.getGreetings = {
	params: {
		'id': Joi.string()
	}
}

module.exports = schemes
