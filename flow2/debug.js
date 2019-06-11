//sould be in a pacckage.json file
/*
"debug-all": "cross-env DEBUG=\"*\" npm run start",
    "debug-app": "cross-env DEBUG=\"app:*\" npm run start",
    "debug-app-http": "cross-env DEBUG=\"app:http:*\" npm run start",
    "debug-app-calculator": "cross-env DEBUG=\"app:calculator\" npm run start"
*/




const a = require('debug')('a') // Creates a debug function with the name a
const b = require('debug')('b') // Creates a debug function with the name b
const c = require('debug')('c') // Creates a debug function with the name c

a('Printed by a')
b('Printed by b')
c('Printed by c')


