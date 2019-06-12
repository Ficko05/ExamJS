const PortModel = require('./PortModel')


module.exports = class Facade{

    static async all(){
        return PortModel.find({}).exec();
    }
        static async findNearby(lng, lat, maxDistance){
            return PortModel.find({
                location: {
                    $near: {
                        $geometry:{
                            type: "point",
                            coordinates: [lng, lat]
                        },
                        $maxDistance: maxDistance * 1000
                    }
                }
            }).exec();
        }



}


