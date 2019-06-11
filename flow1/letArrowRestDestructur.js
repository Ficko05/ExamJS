import React, { Component } from "react";
import { Query } from "react-apollo";
import gql from 'graphql-tag';

//let creates a variable,
// and doesn't get hoisted like a var dose.
//like this

//console.log(foo)
let foo = "hello"

//arrow functions is a way to make 
//functions “easier” or more compact. 

let foo = () => { consol.log("hello") }

//rest parameters allow us to show 
//and unknown amount of parameters as an array.

function sum(...theArgs) {
    return theArgs.reduce((previous, current) => {
      return previous + current;
    });
  }
  sum(1, 2, 3)


//The JavaScript this keyword refers to the object it belongs to.

// In an object method, this refers to the "owner" of the method.
//In the example on the buttom, this refers to the person object.

var person = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    fullName : function() {
      return this.firstName + " " + this.lastName;
    }
  };


//de-structuring assigments:
//an expression that makes it possible to unpack values from arrays and objects.

//array
var a,b;
[a,b] = [1,2]; 
consol.log(a); //1
console.log(b);  //2

//object 
var o = {p: 42, q: true};
var {p, q} = o;

console.log(p); // 42
console.log(q); // true


