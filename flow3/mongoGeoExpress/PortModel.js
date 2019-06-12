const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Types = mongoose.Types;

//defines how the schema should look
const PortSchema = new Schema({
    name: { type: String, required: true },
    location: {
        type: {
            type: String,
            enum: ["Point"],
            default: "Point",
        },
        coordinates: {
            type: [Number]
        }
    }
});

//add a index, to optimize geospacial querys
PortSchema.index({location: "2dsphere"});

module.exports = mongoose.model("Port", PortSchema);



