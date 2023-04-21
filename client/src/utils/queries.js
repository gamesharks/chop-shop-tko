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

export const QUERY_ALL_STATS = gql`
  {
    stats {
      _id
      name
      quickStats
      quantity
      image
      wins
      sigStrikes
      category {
        name
      }
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
      orders {
        _id
        purchaseDate
        products {
          _id
          name
          description
          price
          quantity
          image
        }
      }
    }
  }
`;
