/*jslint node: true */
/*jslint plusplus: true */
'use strict';

var God = require('../god.js');

exports['test creation'] = function (test) {
	var shiva = new God();
	shiva.createTheWorld();
	test.done();
};