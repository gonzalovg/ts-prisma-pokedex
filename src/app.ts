import express from 'express'
import morgan from 'morgan'
import { ApolloServer } from 'apollo-server-express'
import { buildSchema } from 'type-graphql'
import { PokemonResolver } from './resolvers/pokemonResolver'




export async function startServer() {
    const app = express()
    app.use(express.json())
    app.use(express.urlencoded({ extended: true }))
    app.use(morgan('tiny'))

    const server = new ApolloServer({
        schema: await buildSchema({
            resolvers: [PokemonResolver],
        }),
        context: ({ req, res }) => ({ req, res }),
    })
    await server.start()
    server.applyMiddleware({ app, path: '/api/v1/graphql' })

    return app

}



