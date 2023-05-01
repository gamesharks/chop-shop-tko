import { gql } from '@apollo/client';

export const GET_MATCHUPS = gql`
  query getMatchups {
    matchups {
      _id
      fightName
      fightDate
      isActive
      fighters {
        _id
        name
        reach
        image
        wins
        losses
        winsByKO
        winsBySubmission
        nickName
        odds
        stance
        height
        weight
        age
      }
    }
  }
`;

export const GET_FIGHTERS = gql`
  query getFighters {
    fighters {
      _id
      name
      reach
      image
      wins
      losses
      winsByKO
      winsBySubmission
      nickName
      odds
      stance
      height
      weight
      age
    }
  }
`;

export const QUERY_USER = gql`
  query user($email: String!) {
    user(email: $email) {
      _id
      firstName
      email
      accountBalance
      betslips {
        waiverAmount,
        waiverDate
      }
    }
  }
`;


export const QUERY_ME = gql`
  query me {
    me {
      _id
      firstName
      email
      accountBalance
      betslips {
        waiverAmount,
        waiverDate
      }

    }
  }
`;


export const GET_BETSLIP = gql`
  query getBetslip {
    betslip {
      _id
      waiverAmount
      waiverDate
      isActive
      User {
        _id
        firstName
        lastName
        email
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($firstName: String!, $lastName: String!, $email: String!, $password: String!) {
    addUser(firstName: $firstName, lastName: $lastName, email: $email, password: $password) {
      token
      user {
        _id
        firstName
        lastName
        email
      }
    }
  }
`;

export const UPDATE_USER = gql`
  mutation updateUser($firstName: String, $lastName: String, $email: String, $password: String) {
    updateUser(firstName: $firstName, lastName: $lastName, email: $email, password: $password) {
      _id
      firstName
      lastName
      email
    }
  }
`;

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        firstName
        lastName
        email
      }
    }
  }
`;