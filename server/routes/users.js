const router = require('express').Router();
const user = require('../models/user');
const bodyParser = require('body-parser');

let stringParser = bodyParser.text();

/**
 * Routing stuff
 */
router
	.get('/', function(req, res, next) {
		console.log('***********FETCH**************');

		user.findAllUser()
			.then(result => {
				console.log('Dont know if you like : '+ JSON.stringify(result)+ '!!!');
				res.send(JSON.stringify(result));
			});
	})


	.post('/updateUser', stringParser, function(req, res) {
		console.log('********UPDATE**************');
		user.updateUser(JSON.parse(req.body))
	})


	.post('/createUser', stringParser, function(req, res) {
		console.log('***********ADD**************');
		user.createUser(req.body)
	})


	.post('/deleteUser', stringParser, function(req, res) {
		console.log('********DELETE**************');

		user.deleteUser(parseInt(req.body)).then(result => {
				console.log('Sending to REACT : '+ JSON.stringify(result)+ '!!!');
				res.send(JSON.stringify(result));
			});
	});


module.exports = router;
