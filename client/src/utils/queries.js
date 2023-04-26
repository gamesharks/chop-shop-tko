import { gql } from '@apollo/client';

export const QUERY_STATS = gql`
  query getStats($category: ID) {
    stats(category: $category) {
      _id
      name
      quickStats
      quantity
      image
      wins
      sigStrikes
      category {
        _id
      }
    }
  }
`;

export const QUERY_ALL_FIGHTERS = gql`
  {
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

export const QUERY_CATEGORIES = gql`
  {
    categories {
      _id
      name
    }
  }
`;

export const QUERY_USER = gql`
  {
    user {
      firstName
      lastName
      betslips {
        _id
        waiverDate
        waiverAmount
      }
    }
  }
`;
