const debug = require('debug')('app:generator')


module.exports = function randomGenerator() {

    var rndNumb = Math.random();
    debug(rndNumb);
    return rndNumb;

}


