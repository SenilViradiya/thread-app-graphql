import express, { query } from "express";
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { server } from "typescript";
import createApolloGraphqlServer from "./graphql";
import { prismaClient } from "./lib/db";



async function init() {
    const app =express();
const PORT= Number(process.env.PORT)  ||8000

app.use (express.json());


app.get("/",(req,res)=>{
    res.json({message:"Server is up and running"});

});
const gqlServer=await createApolloGraphqlServer()
app.use("/graphql", expressMiddleware(gqlServer));

app.listen(PORT,()=> console.log(`Server started at PORT:${PORT}`));

    
}
 init();