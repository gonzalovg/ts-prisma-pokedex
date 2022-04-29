// import { pokemons_mini } from '@prisma/client'
import { Router } from 'express'
import * as pokemonService from '../services/pokemon'
import { pokemonType } from '../types'

const router = Router()
// todo:funcion que recoja varios args de get request y ejecute consulta
router.get('/', (req, res) => {
  (async () => {
    if (req.query.type !== undefined) {
      const type = req.query.type as unknown as pokemonType
      console.log(type)
      res.send(await pokemonService.getPokemonsByType(type))
    } else {
      res.send(await pokemonService.getPokemons())
    }
  })()
})

router.get('/:pokemon', (req, res) => {
  const pokemonName = req.params.pokemon as string
  (async () => {
    res.send(await pokemonService.getPokemon(pokemonName))
  })()
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

router.post('/', (req, res) => {
  (async () => {
    // const pokemon = { ...req.body } as Pokemon
    const pokemon = {
      pokedex_number: +req.body.pokedex_number,
      name: req.body.name,
      generation: +req.body.generation,
      status: req.body.status,
      species: req.body.species,
      type_1: req.body.type_1 as pokemonType,
      type_2: req.body.type_2 as pokemonType,
      height_m: +req.body.height_m,
      weight_kg: +req.body.weight_kg,
      ability_1: req.body.ability_1,
      ability_2: req.body.ability_2,
      ability_hidden: req.body.ability_hidden,
      hp: +req.body.hp,
      attack: +req.body.attack,
      defense: +req.body.defense,
      sp_attack: +req.body.sp_attack,
      sp_defense: +req.body.sp_defense,
      speed: +req.body.speed
    }
    try {
      await pokemonService.addPokemon(pokemon)
      res.sendStatus(204)
    } catch (err) {
      console.log(err)
      res.send(500)
    }
  })()
})

export default router
