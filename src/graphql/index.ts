import { ApolloServer } from "@apollo/server";
async function createApolloGraphqlServer() {
    const gqlServer =new ApolloServer({
        typeDefs:`
        type Query {
         hello:String
         say (name:String):  String
        }
         type Mutation{
        createUser(firstName: String!,lastName: String!,email: String!,password: String!):Boolean
         }
        `,//schema
        resolvers:{
            Query:{ },
            Mutation:{ },
        },
    });
    
    //start the gql server
    await gqlServer.start();
    
    return gqlServer;
}

export default createApolloGraphqlServer;