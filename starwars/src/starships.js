import { gql, useQuery } from '@apollo/client';
import React from 'react';
//import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import {Layout} from './layout.js'

export const StarshipMainpage = () => {

//const { id } = useParams();

const GET_STARSHIPS = gql`
query AllStarships {
  allStarships {
    starships {
      id
      name
      model
      costInCredits
    }
  }
}`

const { data, loading, error } = useQuery(GET_STARSHIPS);

if (error) return "ERROR"; 


if (loading) return "loading ....";
  
const starshipMain = data.allStarships;
  return (
    <div><h2>Starships</h2>
    <Layout grid>
      {starshipMain.starships.map((ship) => (
        <div key={ship.id}>
          <h3>{ship.name}</h3>
          <p>Model: {ship.model}</p>
          <p>${ship.costInCredits}</p>
          <p><Link to={`/starshipdetails/${ship.id}`}>Details</Link></p>
        </div>
      ))}
    </Layout>
    <Link to="/">Back to the list!</Link>
    </div>
)
}
