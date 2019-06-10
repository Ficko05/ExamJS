
function x(z) {
    console.log("im calling this for another function, " + z);

}

function y(callback) {
    console.log("hello");
    callback("its very nice, yes ");
}

y(x);

