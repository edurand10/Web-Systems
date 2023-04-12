import { gql, useQuery } from '@apollo/client';
import React from 'react';
//import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import {Layout} from './layout.js'

export const CharacterMainpage = () => {

//const { id } = useParams();

const GET_CHARACTERS = gql`
query AllPeople {
  allPeople {
    people {
      id
      name
      gender
      height
      eyeColor
      created
      species {
        name
      }
    }
  }
}
`

const { data, loading, error } = useQuery(GET_CHARACTERS);

if (error) return "ERROR"; 


if (loading) return "loading ....";
  
const charactersMain = data.allPeople;
  return (
    <div><h2>Characters</h2>
    <Layout grid>
      {charactersMain.people.map((person) => (
        <div key={person.id}>
          <h3>{person.name}</h3>
          <p>Gender: {person.gender}</p>
          {/* <p>Species: {person.species.name}</p> */}
          <p><Link to={`/character/${person.id}`}>Details</Link></p>
        </div>
      ))}
    </Layout>
    <Link to="/">Back to the list!</Link>
    </div>
)
}

