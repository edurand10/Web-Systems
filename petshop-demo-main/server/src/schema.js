import gql from "graphql-tag";
export const typeDefs = gql`
  # Schema definitions go here

  type Query {
    bands: [Band]
    band(id:ID!): Band!
  }

  type Error {
    message:String
    path:String
  }

  type BaseResponse {
    success:String
    Errors:[Error]
   }

  type Band {
  id: ID!
  bandname: String!
  bandgenre: String!
  ticketprice: Float!
  bandphoto: String
}

input BandInput {
  bandname: String!
  bandgenre: String!
  ticketprice: Float!
  bandphoto: String
}

type Mutation {
  addBand(input: BandInput!): BaseResponse
 }
`;

