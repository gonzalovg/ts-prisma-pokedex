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

// router.post('/', (req, res) => {
//   (async () => {
//     const pokemon = { ...req.body }
//     console.log(typeof pokemon.pokedex_number)
//     await pokemonService.addPokemon(pokemon)
//     res.sendStatus(204)
//   })()
// })

export default router
