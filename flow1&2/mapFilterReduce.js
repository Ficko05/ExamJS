
var array = [1,6,4,9];

function mappi1(x){
    //this function takes x and maks a new array with
    //the result of calling
    const map1 = x.map(x=>x*3);
    console.log(map1);
}

mappi1(array);

function filter1(x){
//creates a new array with the elements that "passes"
//the test give
    const filtered = x.filter(x => x > 4);
    console.log(filtered);

}
filter1(array);

const reducer = (accumulator, currentValue) => accumulator + currentValue;

function reduce1(x){
//reduces the input to 1 single output value

//const reduced = x.reduce(reducer);
//console.log(reduced);
console.log(x.reduce(reducer,5));
}

reduce1(array);
