import { gql, useQuery } from '@apollo/client';
import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

export const CharacterDetails = () => {

const { id } = useParams();

const GET_CHARACTER_DETAIL = gql`
query Root($personId: ID) {
  person(id: $personId) {
    name
    hairColor
    gender
    birthYear
    height
    eyeColor
  }
}
`

    const { data, loading, error } = useQuery(GET_CHARACTER_DETAIL, {
        variables: { personId: id },
    });

    if (error) return "error....";

    if (loading) return "loading ....";
  
    const person = data.person;
    return (
        <div><h2>Character Details</h2>
        <h4>{person.name}</h4>
        <p> Gender: {person.gender}</p>
        <p> Height: {person.height}</p>
        <p> Eye Color: {person.eyeColor}</p>
        <p> Hair Color: {person.hairColor}</p>
        <p> Birth Year: {person.birthYear}</p>
        
        <Link to="/">Back to the list!</Link>
        </div>
    )
}
