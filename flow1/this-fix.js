function Person(name){
    this.name = name;
    return {
        a: () => this.name,
        b: (function() {
            return this.name;
        }).bind(this)
    }
}

const person = new Person("Tom");
console.log(person.a()); // "Tom"
console.log(person.b()); // "Tom"