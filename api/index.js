import jsonServer from "json-server"
import path from "path"

const server = jsonServer.create()
const middlewares = jsonServer.defaults()

const dbPath = path.join(process.cwd(), "db.json")
const router = jsonServer.router(dbPath)

server.use(middlewares)

server.use(
  jsonServer.rewriter({
    "/api/*": "/$1"
  })
)

server.use(router)

export default server
