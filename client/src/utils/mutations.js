import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;


export const ADD_USER = gql`
  mutation addUser(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
  ) {
    addUser(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
    ) {
      token
      user {
        _id
      }
    }
  }
`;

export const PLACE_BET = gql`
mutation placeBet($waiverAmount: Float! $matchup: ID) {
  placeBet(
    waiverAmount: $waiverAmount
    matchup: $matchup
    ) {
    waiverAmount
    isActive
  } 
}
`;
