const express = require('express')
const cors = require('cors')
const mongooseConnect = require('./mongooseConnect')
const bodyParser = require('body-parser')
const Facade = require('./facade')

mongooseConnect();
const app = express();
//the url  http://localhost:3010/ports/near?lng=10.72265625&lat=55.3791104480105&maxDistance=100


app.use(cors());
app.use(bodyParser.json());
app.get('/ports/near', async function(req, res){
    //obeject de-constructuring
    const {lng,lat,maxDistance} = req.query;
    
    res.json(await Facade.findNearby(Number(lng),Number(lat),Number(maxDistance)));
})
// app.use('/api', require('./router'));

module.exports = app;



