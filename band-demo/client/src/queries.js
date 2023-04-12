import { gql } from "@apollo/client";

export const GET_BANDS = gql`
query Bands {
  bands { 
    bandname
    ticketprice
    id
    bandphoto
    bandgenre
  }
}`

export const GET_BAND = gql`
query Band($bandId: ID!) {
  band(id: $bandId) {
    id
    bandname
    bandgenre
    ticketprice
    bandphoto
  }
}`