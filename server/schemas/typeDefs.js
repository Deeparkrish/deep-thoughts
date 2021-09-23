// import the gql tagged template 
const {gql} = require('apollo-server-express');

// create type def 
// The Thought data type will be the custom Thought data type.
 // Query will return an array of thoughts 
const typeDefs = gql `

type Thought {
    _id:ID
    thoughtText:String
    createdAt : String
    username :String 
    reactions:[Reaction]
    reactionCount :Int
}
type Reaction{
    _id: ID
    reactionBody: String
    createdAt: String
    username: String

}
type User {
    _id: ID
    username: String
    email: String
    friendCount: Int
    thoughts: [Thought]
    friends: [User]
  }
type Query {
    users: [User]
    user(username: String!): User
    thoughts(username: String): [Thought]
    thought(_id: ID!): Thought
  }
`;
// type Mutations{

// }


// export typeDefs 
module.exports = typeDefs;