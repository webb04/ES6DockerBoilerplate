'use strict';

class Time {
    constructor() {
        this.date = new Date();

        this.hour = this.date.getHours();
        this.hour = (this.hour < 10 ? '0' : '') + this.hour;

        this.min  = this.date.getMinutes();
        this.min = (this.min < 10 ? '0' : '') + this.min;

        this.ampm = 'AM';
        if (this.hour > 12) {
            this.ampm = 'PM';
            this.hour -= 12;
        }
    }

    getPretty() {
        return 'The time is ' + this.hour + ':' + this.min + ' ' + this.ampm;  
    }
}

module.exports = Time;
