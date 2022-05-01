// import { pokemons_mini } from '@prisma/client'
import { Router } from 'express'
import pokemonService from '../services/pokemon'
import { Pokemon, pokemonType } from '../types'

interface PokemonQuery {
  type: pokemonType
}

const pokemonRouter = Router()
// todo:funcion que recoja varios args de get request y ejecute consulta
pokemonRouter.get('/', async (req, res) => {
  const query = req.query as unknown as PokemonQuery
  console.log(query)
  const pokemons = query.type !== undefined
    ? await pokemonService.getPokemonsByType(query.type)
    : await pokemonService.getPokemons()
  res.send(pokemons)
})

pokemonRouter.get('/:pokemon', async (req, res) => {
  const pokemonName = req.params.pokemon as string
  const pokemon = await pokemonService.getPokemon(pokemonName)
  res.send(pokemon)
})

// const pokemon = {
//   pokedex_number: req.body.pokedex_number as number,
//   name: req.body.name as string,
//   generation: req.body.generation as number,
//   status: req.body.status as string,
//   species: req.body.species as string,
//   type_1: req.body.type_1 as pokemonType,
//   type_2: req.body.type_2 as pokemonType,
//   height_m: req.body.height_m as number,
//   weight_kg: req.body.weight_kg as number,
//   ability_1: req.body.ability_1 as string,
//   ability_2: req.body.ability_2 as string,
//   ability_hidden: req.body.ability_hidden as string,
//   hp: req.body.hp as number,
//   attack: req.body.attack as number,
//   defense: req.body.defense as number,
//   sp_attack: req.body.sp_attack as number,
//   sp_defense: req.body.sp_defense as number,
//   speed: req.body.speed as number
// }

pokemonRouter.post('/', async (req, res) => {
  try {
    const pokemon = req.body as Pokemon
    await pokemonService.addPokemon(pokemon)
    res.sendStatus(204)
  } catch (err: any) {
    console.error(err.message)
    res.send(500)
  }
})

pokemonRouter.delete('/:pokemon', async (req, res) => {
  try {
    const pokemonName = req.params.pokemon as string
    await pokemonService.deletePokemon(pokemonName)
    res.sendStatus(204)
  } catch (err: any) {
    res.send(err.message)
  }
})

pokemonRouter.put('/:pokemon', async (req, res) => {
  const pokemonData = req.body as Pokemon
  const pokemonToUpdate = req.params.pokemon

  try {
    console.log(pokemonData)
    await pokemonService.updatePokemon(pokemonData, pokemonToUpdate)
    res.sendStatus(204)
  } catch (err: any) {
    console.log(err.message)
    res.send(err.message)
  }
})

export default pokemonRouter
