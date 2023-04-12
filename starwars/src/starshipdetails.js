import { gql, useQuery } from '@apollo/client';
import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';


export const StarshipDetails = () => {

const { id } = useParams();

const GET_STARSHIP_DETAIL = gql`
query Root($starshipId: ID) {
  starship(id: $starshipId) {
    name
    model
    maxAtmospheringSpeed
    hyperdriveRating
    cargoCapacity
    passengers
    crew
    costInCredits
  }
}
  `

    const { data, loading, error } = useQuery(GET_STARSHIP_DETAIL, {
        variables: { starshipId: id },
    });

    if (error) return "error....";

    if (loading) return "loading ....";
  
    const starshipDetail = data.starship;
    return (
      <div>
        <div key={starshipDetail.id}>
          <h4>{starshipDetail.name}</h4>
          <p>Model: {starshipDetail.model}</p>
          <p>Max Atmosphering Speed: {starshipDetail.maxAtmospheringSpeed}</p>
          <p>Hyperdrive Rating: {starshipDetail.hyperdriveRating}</p>
          <p>Crew: {starshipDetail.crew}</p>
          <p>Passengers: {starshipDetail.passengers}</p>
          <p>Cargo Capacity: {starshipDetail.cargoCapacity}</p>
          <p>${starshipDetail.costInCredits}</p>
        </div>
        <Link to="/">Back to the list!</Link>
        </div>
    )
}