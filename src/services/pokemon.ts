import { PrismaClient } from '@prisma/client'
import { Pokemon } from '../types'

export const getPokemons = async () => {
  const prisma = new PrismaClient()
  const pokemons = await prisma.pokemons_mini.findMany()
  await prisma.$disconnect
  return pokemons
}

export const getPokemonsByType = async (type: string) => {
  const prisma = new PrismaClient()
  const pokemons = await prisma.pokemons_mini.findMany({ where: { OR: [{ type_1: { equals: type.toLowerCase(), mode: 'insensitive' } }, { type_2: { equals: type.toLowerCase(), mode: 'insensitive' } }] } })
  await prisma.$disconnect
  return pokemons
}

export const getPokemonsByGeneration = async (generationPokemon: number) => {
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

// export const addPokemon = async (pokemon:Object) => {

// }
