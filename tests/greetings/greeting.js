'use strict'

// ** Configurations
process.env.NODE_ENV = 'development'

// ** Require the dev-dependencies
let chai = require('chai')
let chaiHttp = require('chai-http')
let server = require('../../app.js')
let should = chai.should()

chai.use(chaiHttp)

describe('Greetings', function () {
	describe('/POST greeting', function () {
		it('it should not create greet with invalid data', function (done) {
			chai.request(server)
				.post('/greetings/happyBirthday')
				.send({
				})
				.set('Accept', 'application/json')
				.set('Content-Type', 'application/json')
				.end(function (err, res) {
					res.should.have.status(300)
					res.body.should.be.a('object')
					res.body.should.have.property('error')
					done()
				})
		})

		it('it should create greet with valid data', function (done) {
			chai.request(server)
				.post('/greetings/happyBirthday')
				.send({
					receiver: 'Ashot'
				})
				.end(function (err, res) {
					res.should.have.status(200)
					res.text.should.be.a('string')
					done()
				})
		})
	})
})
