import express, { query } from "express";
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { server } from "typescript";

async function init() {
    const app =express();
const PORT= Number(process.env.PORT)  ||8000

app.use (express.json());

//craete Graphql server
const gqlServer =new ApolloServer({
    typeDefs:`
    type Query {
     hello:String
     say (name:String): String
    }
    `,
    resolvers:{
        Query:{
            hello: ()=> `hey there ,i am a graphql server`,
            say:(_,{name}: {name:String}) =>`Hey ${name}, How are You?`
        },
    },
})

//start the gql server
await gqlServer.start();

app.get("/",(req,res)=>{
    res.json({message:"Server is up and running"});

});
app.use("/graphql", expressMiddleware(gqlServer));

app.listen(PORT,()=> console.log(`Server started at PORT:${PORT}`));

    
}
 init();