const { gql } = require('apollo-server-express')

module.exports = gql`
  type Query {
    users: [User]
  }

  type User {
    id: Int!
    googleId: String!
    name: String!
    email: String!
  }
`
