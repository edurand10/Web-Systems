import { gql } from "@apollo/client";

export const ADD_BAND = gql`
  mutation ADD_BAND($input: BandInput!) {
    addBand(input: $input) {
    success
    Errors {
      message
      path
    }
  }
  }
`;
