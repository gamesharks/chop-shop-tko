const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Category {
    _id: ID
    name: String
  }

  type Stats {
    _id: ID
    name: String
    quickStats: String
    image: String
    wins: Int
    losses: Int
    sigStrikes: Int
    category: Category
  }

  type Matchup {
    _id: ID
    upcomingFight: String
    image: String
    lineup: String
  }

  type 

  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    fights: [Fights]
  }

  type Checkout {
    session: ID
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    categories: [Category]
    fighter(category: ID, name: String): [Stats]
    stats(_id: ID!): Stats
    user: User
    fights(_id: ID!): Fights
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    addOrder(products: [ID]!): Order
    updateUser(firstName: String, lastName: String, email: String, password: String): User
    updateProduct(_id: ID!, quantity: Int!): Product
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
