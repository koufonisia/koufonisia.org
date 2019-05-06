const app = require('./src/app');
const https = require('https');

const port = process.env.PORT || 3000

https.createServer(app).listen(port);