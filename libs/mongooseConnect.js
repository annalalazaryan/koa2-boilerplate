'use strict'

const mongoose = require('mongoose')
mongoose.Promise = global.Promise

module.exports = configs => {
	const connectionOptions = {useMongoClient: true}
	mongoose.connect(configs.db, connectionOptions)

	// Database connection Logs
	mongoose.connection.on('connected', function () {
		console.log('Mongoose connected to ' + configs.db)
	})

	mongoose.connection.on('error', function (err) {
		console.log('Mongoose connection error: ' + err)
	})

	mongoose.connection.on('disconnected', function () {
		console.log('Mongoose disconnected')
	})
}
