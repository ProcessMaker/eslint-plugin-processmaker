'use strict';

var browser = require('./configs/browser');
var node = require('./configs/node');
var vue = require('./configs/vue');

var recommended = require('./configs/recommended');


module.exports = {
	configs: {
		browser,
		node,
		vue,
		recommended
	}
};
