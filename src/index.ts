import express from 'express'
import morgan from 'morgan'
import pokemonRouter from './routes/pokemon'

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan('tiny'))

app.use('/api/v1/pokemons', pokemonRouter)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`app running on http://localhost:${PORT}`)
})

module.exports = app
