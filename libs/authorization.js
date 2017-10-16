'use strict'

module.exports = async (ctx, next) => {
	//** TODO
	console.log("Authorization passed ...");
	await next()
}
