import express from 'express'
import morgan from 'morgan'
import pokemonRouter from './routes/pokemon'
import { ApolloServer } from 'apollo-server'
import {typeDefs, resolvers} from './schema/pokemon.type'

export const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan('tiny'))
app.use('/api/v1/pokemons', pokemonRouter)

// const PORT = process.env.PORT || 3000

export const server = new ApolloServer({
  typeDefs,
  resolvers
})

server.listen().then(({url}) => {
  console.log(`🚀 Server ready at ${url}`)
})