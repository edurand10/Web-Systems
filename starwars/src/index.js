import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// importing pages
import { StarshipDetails } from './starshipdetails.js';
import { CharacterDetails } from './characterdetails.js'
import { StarshipMainpage } from './starships.js';
import { CharacterMainpage } from './characters';


const client = new ApolloClient({
  uri: 'https://swapi-graphql.netlify.app/.netlify/functions/index',
  cache: new InMemoryCache(),
});


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<App />}></Route>
        <Route path="characterMainId" element={<CharacterMainpage />} />
        
        <Route path="starshipMainId" element= {<StarshipMainpage/>}/>

        <Route path="starshipdetails">
          <Route path=":id" element={<StarshipDetails />} />
        </Route>
        <Route path="character">
          <Route path=":id" element={<CharacterDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </ApolloProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
