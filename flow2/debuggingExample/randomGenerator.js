const debug = require('debug')('app:generator')


module.exports = function randomGenerator() {
    //generats a random number
    var rndNumb = Math.random();
    debug(rndNumb);
    return rndNumb;

}


