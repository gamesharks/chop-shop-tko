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
  _id: ID
  waiverAmount: Int
  waiverDate: String
  isActive: Boolean
  matchup: Matchup
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
    accountBalance: Int
    betslips: [Betslip]
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
    user(email: String!): User
    matchups: [Matchup]
    fighters: [Fighters]
    me: User
    betslip: [Betslip]
    users: [User]
    
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    updateUser(firstName: String, lastName: String, email: String, password: String): User
    login(email: String!, password: String!): Auth
    placeBet(waiverAmount: Float!, matchup: ID ): Betslip
  }
`;

module.exports = typeDefs;
