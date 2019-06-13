
function doggo(name,race,age,color){
    this.name = name;
    this.race = race;
    this.age = age;
    this.color = color;
}

doggo.prototype.sound = function (){
	return "wuff im " + this.name 
}

var myDoggo = new doggo("per","Greyhound",33,"green");
console.log(myDoggo.sound());


/*
class Person {
  method() {

  }
}

class Teacher extends Person {
  method(){

  }
}

const t = new Teacher()
const p = new Person()

console.log(t.method == p.method)

*/
