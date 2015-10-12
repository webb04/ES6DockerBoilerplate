'use strict';

var colors = require('colors');
var Time = require('./time');

var time = new Time();

console.log(time.getPretty().green);
