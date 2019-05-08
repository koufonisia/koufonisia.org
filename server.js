const fs = require('fs')
const app = require('./src/app');
const https = require('https');

const port = process.env.PORT || 3000

// Certificate
const privateKey = fs.readFileSync('/usr/local/psa/var/modules/letsencrypt/etc/live/koufonisia.org/privkey.pem', 'utf8');
const certificate = fs.readFileSync('/usr/local/psa/var/modules/letsencrypt/etc/live/koufonisia.org/cert.pem', 'utf8');

const credentials = {
    key: privateKey,
    cert: certificate
};

const httpsServer = https.createServer(credentials, app)

httpsServer.listen(port, () => console.log(`Server is running!`))