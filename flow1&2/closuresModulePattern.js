

var Counter = (function () {

    var privateCounter = 0;

    function changeBy(val) {
        privateCounter += val;
    }
    return {

        increment: function () {
            changeBy(2); //<-- Closures??
        },
        value: function () {
            return privateCounter;
        }

    }

})();


console.log(Counter.value());


