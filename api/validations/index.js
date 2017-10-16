'use strict'

const Joi = require('joi')

module.exports = (dataType, validationScheme) => {
	return async (ctx, next) => {
		let isDataTypeValid = dataType && ['body', 'params', 'query'].includes(dataType)
		let isSchemeValid = validationScheme && validationScheme instanceof Object

		// Validate input parameters 
		if (!isDataTypeValid || !isSchemeValid) {
			ctx.throw(400, `Validation index.js: dataType and validationScheme propertie are not valid.`)
		}

		let validatableData
		switch (dataType) {
		case 'body':
			validatableData = ctx.request.body
			break
		case 'params':
			validatableData = ctx.params
			break
		case 'query':
			validatableData = ctx.query
			break
		}

		await Joi.validate(validatableData, validationScheme, function (err, value) {
			if (err) {
				ctx.throw(300, err)
			}

			// next middlewares should use validated data  
			validatableData = value
		})
		await next()
	}
}
