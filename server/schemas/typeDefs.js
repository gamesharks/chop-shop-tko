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
  }

  type Fights {
    _id: ID
    upcomingFight: String
    image: String
    lineup: String
    fighter: [Stats]
  }

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
    fighter(fight: ID, name: String): [Stats]
    product(_id: ID!): Product
    user: User
    order(_id: ID!): Order
    checkout(products: [ID]!): Checkout
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
