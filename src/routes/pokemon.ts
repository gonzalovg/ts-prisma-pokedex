// import { pokemons_mini } from '@prisma/client'
import { Router, Request, Response } from 'express'
import pokemonService from '../services/pokemon'
import { Pokemon, pokemonType } from '../types'
import { recordCountFormat } from '../utils'

interface PokemonQuery {
  type: pokemonType
  generation: number
}

const pokemonRouter = Router()
// todo:funcion que recoja varios args de get request y ejecute consulta
pokemonRouter.get('/', async (req: Request, res: Response) => {
  const query = req.query as unknown as PokemonQuery

  const type: string = query.type
  const generation: number = +query.generation
  // basado en la cantidad de argumentos, inicialmente se puede filtral por tipo para hacer menos iteraciones en el filter
  const initialPokemons = type !== undefined
    ? await pokemonService.getPokemonsByType(type)
    : await pokemonService.getPokemons()

  const finalPokemons = !isNaN(generation)
    ? await initialPokemons.filter(pokemon => pokemon.generation === generation)
    : await initialPokemons

  res.send(recordCountFormat(finalPokemons))
})

pokemonRouter.get('/:pokemon', async (req: Request, res: Response) => {
  const pokemonName = req.params.pokemon as string
  const pokemon = await pokemonService.getPokemon(pokemonName)
  res.send(recordCountFormat(pokemon))
})

pokemonRouter.post('/', async (req: Request, res: Response) => {
  try {
    const pokemon = req.body as Pokemon
    await pokemonService.addPokemon(pokemon)
    res.sendStatus(204)
  } catch (err: any) {
    console.error({ error: err.message })
    res.send(500)
  }
})

pokemonRouter.delete('/:pokemon', async (req: Request, res: Response) => {
  try {
    const pokemonName = req.params.pokemon as string
    await pokemonService.deletePokemon(pokemonName)
    res.sendStatus(204)
  } catch (err: any) {
    res.send({ error: err.message })
  }
})

pokemonRouter.put('/:pokemon', async (req: Request, res: Response) => {
  const pokemonData = req.body as Pokemon
  const pokemonToUpdate = req.params.pokemon

  try {
    await pokemonService.updatePokemon(pokemonData, pokemonToUpdate)
    res.sendStatus(204)
  } catch (err: any) {
    res.send({ error: err.message })
  }
})

export default pokemonRouter
