function Person(name){
    this.name = name;
    return {
        a: () => this.name,
        b: function() {
            console.log(this) // { a: [Function: a], b: [Function: b] }
            return this.name;
        }
    }
}

const person = new Person("Lars");
console.log(person.a()); // "Lars"
console.log(person.b()); // undefined, since this refers to the object containing the a and b functions