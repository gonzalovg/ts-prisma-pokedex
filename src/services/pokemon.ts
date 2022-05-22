import { PrismaClient } from '@prisma/client'
import { Pokemon } from '../types'

const prisma = new PrismaClient()

const getPokemons = (): Promise<Pokemon[]> => {
  return prisma.pokemons_mini.findMany({ orderBy: { pokedex_number: 'asc' } })
}

const getPokemonsByType = (type: string): Promise<Pokemon[]> => {
  return prisma.pokemons_mini.findMany({ where: { OR: [{ type_1: { equals: type.toLowerCase(), mode: 'insensitive' } }, { type_2: { equals: type.toLowerCase(), mode: 'insensitive' } }] } })
}

const getPokemonsByGeneration = (generationPokemon: number): Promise<Pokemon[]> => {
  return prisma.pokemons_mini.findMany({ where: { generation: generationPokemon } })
}

const getPokemon = (pokemonName: string): Promise<Pokemon[]> => {
  return prisma.pokemons_mini.findMany({ where: { name: { contains: pokemonName, mode: 'insensitive' } } })
}

const addPokemon = (pokemon: Pokemon) => {
  return prisma.pokemons_mini.create({ data: pokemon })
}

const deletePokemon = (pokemonName: string) => {
  return prisma.pokemons_mini.delete({ where: { name: pokemonName } })
}

const updatePokemon = (pokemon: Pokemon, pokemonToUpdate: string) => {
  return prisma.pokemons_mini.update({
    where: {
      name: pokemonToUpdate
    },
    data: pokemon
  })
}

const pokemonService = {
  getPokemons,
  getPokemonsByType,
  getPokemonsByGeneration,
  getPokemon,
  addPokemon,
  deletePokemon,
  updatePokemon
}

export default pokemonService
