var request	= require('request');
var requestBuilder = require('../helpers/requestOptionsBuilder');
var responseBuilder = require('../helpers/responseBuilder');
var express = require('express');
var router = express.Router();

var url = require('../helpers/urlHelper').agendaService;

router.put('/:entidade/:id([0-9])', function (req, res) {
	var id = req.params.id;
	var entidade = req.params.entidade;
	var options = requestBuilder.buildRequest('POST', url + entidade + '/' + id, req);
	
	request(options, response);

	function response(error, response, body) {
		responseBuilder.buildResponse(error, response, body, res);
	}
	
});

module.exports = router;