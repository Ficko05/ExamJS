const fetch = require('node-fetch')
const mongooseConnect = require('./mongooseConnect')
const PortModel = require('./PortModel')

async function populateFromGithub() {
    try {
        const response = await fetch("https://raw.githubusercontent.com/mapbox/ios-sdk-examples/master/Examples/Files/ports.geojson")
        const ports = await response.json()
        insert(ports.features);
    } catch (e) {
        console.error(e);
    }
}

async function insert(ports) {

    console.log("start mongo insertion")
    //takes the ports
    await PortModel.insertMany(ports.map(p => {

        //foreach port creat port document 

        const toCreate = {
            name: p.properties.name,
            location: p.geometry
        }

        return toCreate
    }))

console.log("mongo insertion done")
}

mongooseConnect()
populateFromGithub()


