const { gql } = require('apollo-server-express');

const typeDefs = gql`


type Matchup {
  _id: ID
  fightName: String
  fightDate: String
  isActive: Boolean
  fighters: [Fighters]
}

type Betslip {
  waiverAmount: Int
  waiverDate: String
  isActive: Boolean
  User: [User]
}

  type Fighters {
    _id: ID
    name: String
    reach: String
    image: String
    wins: Int
    losses: Int
    winsByKO: Int
    winsBySubmission: Int
    nickName: String
    odds: Int
    stance: String
    height: String
    weight: Int
    age: Int
  } 

  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    fights: [Matchup]
    betSlip: [Betslip]
    friends: [Friends]
  }

  type Auth {
    token: ID
    user: User
  }

  type Friends {
    _id: ID
  }

  type Query {
    matchups: [Matchup]
    fighters: [Fighters]
    fights:  [Matchup]
    user: User
    betslip: [Betslip]
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    updateUser(firstName: String, lastName: String, email: String, password: String): User
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
