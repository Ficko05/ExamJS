const express = require('express')
const serverDebug = require('debug')('app:http:server')
const requestDebug = require('debug')('app:http:request')
const randomGenerator = require('./randomGenerator')

console.log("DEBUG=" + process.env.DEBUG)

const port = 3002;
const app = express()

app.set('json spaces', 4)

app.use((req, res, next) => {
    requestDebug(`Incoming request ${req.url}`)
    next()
});

app.get('/randomNumber', (req, res) => {
    res.send(randomGenerator().toString());

});

app.listen(port, err => {
    if (err) {
        serverDebug("Count not create server")
        serverDebug(err)
        return;
    }

    serverDebug(`Server listening on port ${port}.`)
})

