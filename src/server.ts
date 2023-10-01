import { createServer, Response, Server } from 'miragejs'

const searchResponse = { results: [{ data: 'text1' }, { data: 'text2' }] }

const findUser200 = (): Response => new Response(200, {}, searchResponse)
const findUser500 = (): Response => new Response(500, {})

export const server: () => Server = () =>
  createServer({
    logging: true,
    routes() {
      this.get('/api/search/:searchText', findUser200, { timing: 1000 })
    }
  })
