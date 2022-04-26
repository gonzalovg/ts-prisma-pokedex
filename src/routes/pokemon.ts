import { Router } from 'express'
import * as pokemonService from '../services/pokemon'

const router = Router()

router.get('/', (_req, res) => {
  (async () => {
    res.send(await pokemonService.getPokemons())
  })()
})

export default router
