const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()


// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewPath)
// Register the partials
hbs.registerPartials(partialsPath)

// Setup static directory to serve 
app.use(express.static(publicDirectoryPath))
app.use((req, res, next) => {
    if (req.secure) {
        // request was via https, so do no special handling
        return next();
    } else {
        // request was via http, so redirect to https
        return res.redirect('https://' + req.headers.host + req.url);
    }
});
app.get('', (req, res) => {
    res.render('index')
})

app.get('*', (req, res) => {
    res.render('404', {
        title: '404',
        author: 'George Simos',
        errorMessage: 'Page not found.'
    })
})

module.exports = app;
