const { gql } = require('apollo-server-express');

const typeDefs = gql`


type Matchup {
  fightName: String
  fightDate: String
  isActive: Boolean
  fighters: [Fighters]
}



  type Fighters {
    _id: ID
    name: String
    quickStats: String
    image: String
    wins: Int
    losses: Int
    sigStrikes: Int
  } 

  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    fights: [Matchup]
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    matchups: [Matchup]
    fighters: [Fighters]
    fights:  [Matchup]
    user: User
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    updateUser(firstName: String, lastName: String, email: String, password: String): User
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
