import { gql } from "apollo-server";
import pokemonService from "../services/pokemon";

export const typeDefs = gql`
type Pokemon {
    pokedex_number: Int
    name: String!
    generation: Int
    status: String
    species: String
    type_1: String
    type_2: String
    height_m: String
    weight_kg: String
    ability_1: String
    ability_2: String
    ability_hidden: String
    hp: Int
    attack: Int
    defense: Int
    sp_attack: Int
    sp_defense: Int
    speed: Int
}

type Query {
    pokemonCount: Int
    allPokemons: [Pokemon]!

    }
`

export const resolvers = {
    Query: {
        pokemonCount: () => pokemonService.getPokemons().then(pokemons => pokemons.length),
        allPokemons: () => pokemonService.getPokemons()
    }
}

export default {
    typeDefs,
    resolvers
}