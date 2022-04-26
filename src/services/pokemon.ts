import { PrismaClient } from '@prisma/client'

export const getPokemons = async () => {
  const prisma = new PrismaClient()
  const pokemons = await prisma.pokemons_mini.findMany()

  return pokemons
}
