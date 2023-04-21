const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Category {
    _id: ID
    name: String
  }


type Matchup{
  fightDate
  isActive
  fighters: [Fighters]
}



  type Fighter {
    _id: ID
    name: String
    quickStats: String
    image: String
    wins: Int
    losses: Int
    sigStrikes: Int
  }

  type Fights {
    _id: ID
    upcomingFight: String
    image: String
    lineup: String
    fighter: [Fighter]
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
