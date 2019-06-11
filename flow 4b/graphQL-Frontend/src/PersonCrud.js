import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";
import { Query } from "react-apollo";
import gql from 'graphql-tag';


//query
const GET_PERSON = gql`{
    persons {
        id
        name
        age
    }
}`;

// $ == parameter
const DELETE_PERSON = gql`
    mutation($id: ID!){
        deletePerson(id: $id){
            id
            name
        }
    }
`;

const CREATE_PERSON = gql`
mutation($input: PersonInput!){
    createPerson(input: $input){
        id
        name
        age
    }
}
`;

const UPDATE_PERSON = gql`
mutation($id: ID!, $input: PersonInput!){
    updatePerson(id: $id, input: $input){
        id
    }
}
`;



export default class PersonCrud extends Component {

    state = {
        //contains the person currently being updated
        toUpdate: null
    }

    delete = (id) => {
        const mutation = DELETE_PERSON;
        this.props.client.mutate({ mutation, variables: { id } }).then(response => {
            this.refetch()
        });

    }
    create = (name, age) => {
        const mutation = CREATE_PERSON
        this.props.client.mutate({ mutation, variables: { input: { name, age } } }).then(response => {
            this.refetch()
        })
    }

    update = (id, name, age) => {
        const mutation = UPDATE_PERSON
        this.props.client.mutate({ mutation, variables: {id: id, input: { name, age}}}).then(response => {
            this.refetch()
        })
    }


    render() {
        return <>
            <h2>Persons</h2>
            <Query query={GET_PERSON}>
                {({ loading, error, data, refetch }) => {
                    this.refetch = refetch
                    if (error)
                        return <p>there was an error</p>
                    if (loading || !data)
                        return <p>loading...</p>

                    return (
                        <>
                            <table>
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>name</th>
                                        <th>age</th>
                                        <th>Update</th>
                                        <th>Delete</th>


                                    </tr>
                                </thead>
                                <tbody>
                                    {data.persons.map(person =>
                                        <tr key={person.id}>
                                            <td>{person.id}</td>
                                            <td>{person.name}</td>
                                            <td>{person.age}</td>

                                            <td><button onClick={() => this.showUpdateForm(person)}>Update</button></td>
                                            <td><button onClick={() => this.delete(person.id)}>Delete</button> </td>
                                        </tr>

                                    )}
                                </tbody>
                            </table>
                            <div>
                                {this.state.toUpdate && <form onSubmit={this.onUpdateSubmit}>
                                    <legend>Update Person</legend>
                                    <input name="name" type="text" placeholder="Name" defaultValue={this.state.toUpdate.name} />
                                    <input name="age" type="number" step="1" placeholder="Age" defaultValue={this.state.toUpdate.age} />
                                    <button>Update</button>
                                </form>}
                                {!this.state.toUpdate && <form onSubmit={this.onCreateSubmit}>
                                    <legend>Create Person</legend>
                                    <input name="name" type="text" placeholder="Name" />
                                    <input name="age" type="number" step="1" placeholder="Age" min="13" />
                                    <button>Create</button>
                                </form>}
                            </div>
                        </>
                    )
                }}
            </Query>
        </>
    }

    showUpdateForm = (person) => {
        this.setState({
            toUpdate: person
        })
    }

    onUpdateSubmit = (event) => {
        event.preventDefault()
        const inputs = event.target.elements

        const name = inputs.name.value
        const age = parseInt(inputs.age.value);

        this.update(this.state.toUpdate.id, name, age)
    }

    onCreateSubmit = (event) => {
        event.preventDefault()
        const inputs = event.target.elements

        const name = inputs.name.value
        const age = parseInt(inputs.age.value);



        this.create(name, age);
    }

}










