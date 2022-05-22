import supertest from 'supertest'
import { app, server } from '../../src/index'
// import pokemonService from '../../src/services/pokemon'

const api = supertest(app)
// const examplePokemon = {
//   "pokedex_number": 0,
//   "name": "test1",
//   "generation": 0,
//   "status": "angry",
//   "species": "",
//   "type_1": "Fire",
//   "type_2": "Ice",
//   "height_m": 1.73,
//   "weight_kg": 73,
//   "ability_1": "chlorophyll",
//   "ability_2": "buble",
//   "ability_hidden": "cut",
//   "hp": 1000,
//   "attack": 69,
//   "defense": 48,
//   "sp_attack": 56,
//   "sp_defense": 123,
//   "speed": 120
// }






describe('Endpoints', () => {
  test('Notes are returned as json', async () => {
    await api
      .get('/api/v1/pokemons')
      .expect(200)
      .expect('Content-Type', /application\/json/)
  })
  test('General pokemons endpoint returns more than 1', async () => {
    const response = await api
      .get('/api/v1/pokemons')

    expect(response.body.data.length).toBeGreaterThan(1)
  })
  test('Bulbasaur endpoint returns pokemon_name=bulbasaur', async () => {
    const response = await api
      .get('/api/v1/pokemons/bulbasaur')

    expect(response.body.data[0].name).toBe('Bulbasaur')
  })
  test('Filtering by type and generation is correct', async () => {
    const response = await api.get('/api/v1/pokemons?type=grass&generation=1')

    const pokemons = response.body.data

    pokemons.forEach((pokemon: { type_1: string; type_2: string; generation: number }) => {
      expect([pokemon.type_1, pokemon.type_2]).toContain('Grass')
      expect(pokemon.generation).toBe(1)
    })
  })
  // test('Able to add pokemon test1', async () => {
  //   // await api.post('api/v1/pokemons').send(examplePokemon)
  //   // expect(200)
  //   await pokemonService.addPokemon(examplePokemon)
  //   expect(200)
  // })
  test('Able to delete test1 pokemon', async () => {
    await api
    .delete('/api/v1/pokemons/test1')
    .expect(200)
  })
})



afterAll(() => {
  server.close()
})
