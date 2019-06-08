# ExamJS

#### Explain shortly about GraphQL, its purpose and some of its use cases

 GraphQl is a query language for your API. 
 Using GraphQL, we define a schema consisting of our types that can be retrieved, and the queries and mutations that can be executed.The client can then execute the defined GraphQL queries and mutations, using a HTTP post request.

the diffrence between REST and GraphQL is the number of endpoints exposed by a server. GraphQL has one endpoint you can execute all definded queries and mutations. where REST has a one-to-one relationship between endpoints and queries.

REST =  CRUD operations
GraphQL = queries and mutations are much more like function calls.


#### Explain some of the Server Architectures that can be implemented with a GraphQL backend

>GraphQL is a specification that describes the behavior of a GraphQL server. It is a set of guidelines on how requests and responses should be handled like supported protocols, format of the data that can be accepted by the server, format of the response returned by the server, etc. The request made by a client to the GraphQL server is called a Query. (...) It is also neutral to databases, so you can use it with relational or NoSQL databases.

GraphQL and REST both hides the server langage. so you can the the data no mater the "coding" language you use.

#### What is meant by the terms over- and under-fetching in relation to REST

>Over-fetching is fetching too much data, aka there is data in the reponse you don't use.

Under-fetching is not having enough data with a call to an endpoint, leading you to call a second endpoint.

In both cases, they are performances issues : you either use more bandwidth than you should, or you are making more HTTP requests that you should.

In a perfect world, theses problems would never arise ; you would have exactly the right endpoints to give exactly the right data to your products.

These problems often appear when you scale and iterate on your products. The data you use on your pages often change, and the cost to maintain a separate endpoint with exactly the right data for each component becomes too much.

So you end up with a compromise between not having too much endpoints and having the endpoints fit the need best. This will lead to over-fetching in some cases (the endpoint will provide more data that you need for your specific component), and under-fetching in others (you will need to call a second endpoint).

So GraphQL fixes this problem because it allows access to an arbitrary set of data exposed by the server. You specifically specify what you need and will get this data, and only this data, in one trip to the server.

https://stackoverflow.com/questions/44564905/what-is-over-fetching-or-under-fetching

GraphQL fixes this by requiring the fields that must be retrieved from the server. The server therefor does not need to transfer unnecessary fields when making requests.

```js{
  Person {
    name
    age
  }
} 
```
in the code above we specify that the person contains a name and a age.  This information is sent when making the request.

The graphql package automatically removes any fields not specifies on the returned type.

#### Explain shortly about GraphQL’s type system and some of the benefits we get from this

The schema defines the data-types that can be retrieved from the datastore. The schema also contains the queries that can be performed by the client. The schema is created using the GraphQL schema language.

#### Explain shortly about GraphQL Schema Definition Language, and provide a number of examples of schemas you have defined.

The GraphQL Schema Definition Language is the language used to define the schema of the GrqphQL endpoint. The schema contains the types that can be accepted and returned, and queries and mutations that the client can execute.

```js

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

```


#### Provide a number of examples demonstrating data fetching with GraphQL. You should provide examples both running in a Sandbox/playground and examples executed in an Apollo Client

[link](http://localhost:4000/?query=%23%20Welcome%20to%20GraphiQL%0A%23%0A%23%20GraphiQL%20is%20an%20in-browser%20tool%20for%20writing%2C%20validating%2C%20and%0A%23%20testing%20GraphQL%20queries.%0A%23%0A%23%20Type%20queries%20into%20this%20side%20of%20the%20screen%2C%20and%20you%20will%20see%20intelligent%0A%23%20typeaheads%20aware%20of%20the%20current%20GraphQL%20type%20schema%20and%20live%20syntax%20and%0A%23%20validation%20errors%20highlighted%20within%20the%20text.%0A%23%0A%23%20GraphQL%20queries%20typically%20start%20with%20a%20%22%7B%22%20character.%20Lines%20that%20starts%0A%23%20with%20a%20%23%20are%20ignored.%0A%23%0A%23%20An%20example%20GraphQL%20query%20might%20look%20like%3A%0A%23%0A%23%20%20%20%20%20%7B%0A%23%20%20%20%20%20%20%20field(arg%3A%20%22value%22)%20%7B%0A%23%20%20%20%20%20%20%20%20%20subField%0A%23%20%20%20%20%20%20%20%7D%0A%23%20%20%20%20%20%7D%0A%23%0A%23%20Keyboard%20shortcuts%3A%0A%23%0A%23%20%20Prettify%20Query%3A%20%20Shift-Ctrl-P%20(or%20press%20the%20prettify%20button%20above)%0A%23%0A%23%20%20%20%20%20%20%20Run%20Query%3A%20%20Ctrl-Enter%20(or%20press%20the%20play%20button%20above)%0A%23%0A%23%20%20%20Auto%20Complete%3A%20%20Ctrl-Space%20(or%20just%20start%20typing)%0A%23%0A%0A%7B%0A%20%20persons%7Bname%7D%0A%7D%0A%0A%23%20mutation%7B%0A%23%20createPerson(input%3A%20%7B%0A%23%20%20%20name%3A%20%22peter%22%2C%0A%23%20%20%20age%3A%2032%0A%23%20%7D)%7Bname%7D%0A%23%20%7D%0A%0A%23%20mutation%7B%0A%23%20%20%20deletePerson(id%3A%204)%7Bid%7D%0A%23%20%7D%0A%20%20%0A%0A%23%20mutation%7B%0A%23%20%20%20updatePerson(id%3A%203%2C%20input%3A%20%7B%0A%23%20%20%20%20%20name%3A%20%22Morten%22%0A%23%20%20%20%7D)%7Bname%7D%0A%20%20%0A%23%20%20%20%7D%0A%0A%23%20%7B%0A%23%20%20%20searchPersonsByName(name%3A%20%22e%22)%7Bname%7D%0A%23%20%7D%0A%0A%0A)

[apollo](https://github.com/Ficko05/ExamJS/blob/master/graphQL-Frontend/src/PersonCrud.js)


#### Provide a number of examples demonstrating creating, updating and deleting with Mutations. You should provide ### examples both running in a Sandbox/playground and examples executed in an Apollo Client.

[backend](http://localhost:4000/?query=%23%20Welcome%20to%20GraphiQL%0A%23%0A%23%20GraphiQL%20is%20an%20in-browser%20tool%20for%20writing%2C%20validating%2C%20and%0A%23%20testing%20GraphQL%20queries.%0A%23%0A%23%20Type%20queries%20into%20this%20side%20of%20the%20screen%2C%20and%20you%20will%20see%20intelligent%0A%23%20typeaheads%20aware%20of%20the%20current%20GraphQL%20type%20schema%20and%20live%20syntax%20and%0A%23%20validation%20errors%20highlighted%20within%20the%20text.%0A%23%0A%23%20GraphQL%20queries%20typically%20start%20with%20a%20%22%7B%22%20character.%20Lines%20that%20starts%0A%23%20with%20a%20%23%20are%20ignored.%0A%23%0A%23%20An%20example%20GraphQL%20query%20might%20look%20like%3A%0A%23%0A%23%20%20%20%20%20%7B%0A%23%20%20%20%20%20%20%20field(arg%3A%20%22value%22)%20%7B%0A%23%20%20%20%20%20%20%20%20%20subField%0A%23%20%20%20%20%20%20%20%7D%0A%23%20%20%20%20%20%7D%0A%23%0A%23%20Keyboard%20shortcuts%3A%0A%23%0A%23%20%20Prettify%20Query%3A%20%20Shift-Ctrl-P%20(or%20press%20the%20prettify%20button%20above)%0A%23%0A%23%20%20%20%20%20%20%20Run%20Query%3A%20%20Ctrl-Enter%20(or%20press%20the%20play%20button%20above)%0A%23%0A%23%20%20%20Auto%20Complete%3A%20%20Ctrl-Space%20(or%20just%20start%20typing)%0A%23%0A%0A%23%20%7B%0A%23%20%20%20persons%7Bname%7D%0A%23%20%7D%0A%0Amutation%7B%0AcreatePerson(input%3A%20%7B%0A%20%20name%3A%20%22peter%22%2C%0A%20%20age%3A%2032%0A%7D)%7Bname%7D%0A%7D%0A%0A%23%20mutation%7B%0A%23%20%20%20deletePerson(id%3A%204)%7Bid%7D%0A%23%20%7D%0A%20%20%0A%0A%23%20mutation%7B%0A%23%20%20%20updatePerson(id%3A%203%2C%20input%3A%20%7B%0A%23%20%20%20%20%20name%3A%20%22Morten%22%0A%23%20%20%20%7D)%7Bname%7D%0A%20%20%0A%23%20%20%20%7D%0A%0A%23%20%7B%0A%23%20%20%20searchPersonsByName(name%3A%20%22e%22)%7Bname%7D%0A%23%20%7D%0A%0A%0A)

[apollo](https://github.com/Ficko05/ExamJS/blob/master/graphQL-Frontend/src/PersonCrud.js)

#### Explain the Concept of a Resolver function, and provide a number of simple examples of resolvers you have  implemented in a GraphQL Server.

Resolver functions are the functions that execute the operation when a query or mutation is called by a client. There is a one-to-one relationship between GraphQL queries/mutations and resolver functions.

```js
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
```

#### Explain the benefits we get from using a library like Apollo-client, compared to using the plain fetch-API

better syntax.
REACT components. 
better error mesages.

A GraphQL client is therefor a library that can send HTTP requests, that also help the developer to compose these queries. This includes the ability to insert variables into queries.

#
#### In an Apollo-based React Component, demonstrate how to perform GraphQL Queries, including:

* Explain the structure of the Query Component

executing querys is done buy using the Query component that is rendered within the render method of the component.

* Explain the purpose of ApolloClient and the ApolloProvider component


* Explain the purpose of the gql-function (imported from graphql-tag)

#
#### In an Apollo-based React Component, demonstrate how to perform GraphQL Mutations?



#### Demonstrate and highlight important parts of a “complete” GraphQL-app using Express and MongoDB on the server side, and Apollo-Client on the client.
