//AO indicator by Gab0 - 04/jan/2019;

var SMA = require('./SMA');

var Indicator = function(settings) {
    this.input = 'candle';

    this.result = 0;
    this.age = 0;

    this.shortsma = new SMA(settings.short);
    this.longsma = new SMA(settings.long);
};

Indicator.prototype.update = function(candle) {

    var medianprice = (candle.high + candle.low) / 2;

    this.shortsma.update(medianprice);
    this.longsma.update(medianprice);

    this.result = this.shortsma.result - this.longsma.result;

};

module.exports = Indicator;
