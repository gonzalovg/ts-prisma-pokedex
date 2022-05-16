import 'reflect-metadata'
import { startServer } from './app'

async function main() {

    const app = await startServer()
    const PORT = process.env.PORT || 3000
    app.listen(PORT, () => {
        console.log(`Server is running http://localhost:${PORT}/api/v1/graphql`)
    })
}


main()