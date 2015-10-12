'use strict';

var assert = require('assert');
var Time = require('../dist/time');

describe('time', function() {

    describe('#constructor', function() {

        it('Object initializes hour, minute, and AM/PM', function() {
            var time = new Time();

            assert(time.hour);
            assert(time.min);
            assert(time.ampm);
        });
    });
});
