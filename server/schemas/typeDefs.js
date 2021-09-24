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
    password:String
    friendCount: Int
    thoughts: [Thought]
    friends: [User]
  }
  type Auth {
    token: ID!
    user: User
  }
type Query {
    me:User
    users: [User]
    user(username: String!): User
    thoughts(username: String): [Thought]
    thought(_id: ID!): Thought
  }
  type Mutation{
    login(email:String!, password:String!):Auth,
    addUser(username:String!,email:String!,password:String!):Auth
    addThought(thoughtText: String!): Thought,
  addReaction(thoughtId: ID!, reactionBody: String!): Thought,
  addFriend(friendId: ID!): User
  }
`;


// export typeDefs 
module.exports = typeDefs;