const app = require('./src/app');
const http = require('http');

const port = process.env.PORT || 3000

const httpServer = http.createServer(app)

httpServer.listen(port)

