const {
    graphql,
    buildSchema
} = require('graphql');
const express = require('express');
const graphqlHTTP = require('express-graphql');
const cors = require('cors');

const schema = buildSchema(`

# definds a person
type Person{
    id: ID!
    name: String!
    age: Int!
}

input PersonInput{
    name: String
    age: Int
}

type Query{
    searchPersonsByName(name: String! ): [Person!]!
    persons: [Person!]!
}

type Mutation {
    deletePerson(id: ID!): Person
    createPerson(input: PersonInput!): Person
    updatePerson(id: ID!, input: PersonInput!): Person
}

`);

const persons = [
    {id:1, name:"Filip", age:61},
    {id:2, name:"Alex", age:90},
    {id: 3, name:"Thomas", age:3}
]

const root = {
//
persons() {
    return persons;
},

searchPersonsByName(args) {
    const {name} = args;

    // for hver person, check om deres navn (i lowercase) indeholder søgeordet (i lowercase)
    return persons.filter(person => person.name.toLowerCase().includes(name.toLowerCase()))
    
},

createPerson(args){
    args.input.id = getNextPersonId()  
    persons.push(args.input)
    return args.input;

},
deletePerson(args){
    //object deconstruction
    const {id} = args;
    for(let i = 0; i < persons.length; i++){
        const person = persons[i]
        if(person.id == id){
            persons.splice(i,1)
            return person;
        }
    }
},

updatePerson(args) {
const foundPerson = findPerson(args.id);
if(!foundPerson){
    return foundPerson;
}
Object.keys(args.input).forEach(key => {
    if (foundPerson[key])
    foundPerson[key] = args.input[key];
})
return foundPerson;
}

}

function findPerson(id) {
    for(let person of persons){
        if(person.id == id) {
            return person;
                }
    }
    return null;
}

function getNextPersonId() {
    if (persons.length < 1)
        return 1;
    else
        return persons[persons.length - 1].id + 1;
}

var app = express();
app.use(cors());
app.use('/', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
}));
app.listen(4000);
console.log('Running a GraphQL API server at localhost:4000');