import { PrismaClient } from '@prisma/client'
import { Pokemon } from '../types'

export const getPokemons = async (): Promise<Pokemon[]> => {
  const prisma = new PrismaClient()
  const pokemons = await prisma.pokemons_mini.findMany({ orderBy: { pokedex_number: 'asc' } })
  await prisma.$disconnect
  return pokemons
}

export const getPokemonsByType = async (type: string): Promise<Pokemon[]> => {
  const prisma = new PrismaClient()
  const pokemons = await prisma.pokemons_mini.findMany({ where: { OR: [{ type_1: { equals: type.toLowerCase(), mode: 'insensitive' } }, { type_2: { equals: type.toLowerCase(), mode: 'insensitive' } }] } })
  await prisma.$disconnect
  return pokemons
}

export const getPokemonsByGeneration = async (generationPokemon: number): Promise<Pokemon[]> => {
  const prisma = new PrismaClient()
  const pokemons = await prisma.pokemons_mini.findMany({ where: { generation: generationPokemon } })
  await prisma.$disconnect
  return pokemons
}

export const getPokemon = async (pokemonName: string) => {
  const prisma = new PrismaClient()
  const pokemon = await prisma.pokemons_mini.findMany({ where: { name: { contains: pokemonName, mode: 'insensitive' } } })
  await prisma.$disconnect
  return pokemon
}

export const addPokemon = async (pokemon: Pokemon) => {
  const prisma = new PrismaClient()
  await prisma.pokemons_mini.create({ data: pokemon })
  await prisma.$disconnect
}

export const deletePokemon = async (pokemonName: string) => {
  const prima = new PrismaClient()
  await prima.pokemons_mini.delete({ where: { name: pokemonName } })
  await prima.$disconnect
}

export const updatePokemon = async (pokemon: Pokemon, pokemonToUpdate: string) => {
  const prisma = new PrismaClient()
  await prisma.pokemons_mini.update({
    where: {
      name: pokemonToUpdate
    },
    data: { ...pokemon }
  })

  await prisma.$disconnect
}

// export const addPokemon = async (pokemon:Object) => {

// }
