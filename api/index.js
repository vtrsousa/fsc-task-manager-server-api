const jsonServer = require("json-server");
const path = require("path");

const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, "../db.json"));
const middlewares = jsonServer.defaults();

server.use(middlewares);

// Rewrite /api/* to /* for json-server routing
server.use(
  jsonServer.rewriter({
    "/api/*": "/$1",
  })
);

server.use(router);

// Export as Vercel serverless function
// Vercel will invoke this handler for each request
// The json-server rewriter above handles /api/* -> /* transformation
module.exports = (req, res) => {
  return server(req, res);
};
