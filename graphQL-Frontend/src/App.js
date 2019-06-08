import React from 'react';
import ApolloClient from 'apollo-boost';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider } from "react-apollo";
import PersonCrud from "./PersonCrud";
import './App.css';

const client = new ApolloClient({
  uri: "http://localhost:4000/",
  link: new HttpLink()
});

function App() {
  return (
    <div id="contaniner">
      <main>
        <ApolloProvider client={client}>
              <PersonCrud client={client}/>
        </ApolloProvider>
      </main>
    </div>
  );
}

export default App;
