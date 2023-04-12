import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';

const client = new ApolloClient({
    uri: 'https://swapi-graphql.netlify.app/.netlify/functions/index',
    cache: new InMemoryCache(),
});

// const client = ...

client
.query({
  query: gql`
  query AllStarships {
    allStarships {
      starships {
        name
        model
        consumables
        passengers
      }
    }
  }
  `,
})
.then((result) => console.log(result));


// this is if you were to build your own index page!! the rest of the app uses the index.js as reference with the other files
// refer to index.js as the example for Assignment 4