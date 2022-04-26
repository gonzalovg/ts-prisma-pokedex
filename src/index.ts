import express from 'express'
import morgan from 'morgan'
import router from './routes/pokemon'

const app = express()
app.use(express.json())
app.use(morgan('tiny'))

app.use('/api/pokemon', router)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`app running on http://localhost:${PORT}`)
})
