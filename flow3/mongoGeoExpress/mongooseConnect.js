const mongoose = require('mongoose')
const config = require('./config')

module.exports = () => {
//connects to the mongo server. 
    mongoose.connect(config.MONGO_URL, { useCreateIndex: true, useNewUrlParser: true }, (err) => {
      //collection error
        if(err){
            console.error("could not connect to MongoDB:");
            console.log(err)
            return
        }

        console.log("Successfully connected to MongoDB")

    });

}





