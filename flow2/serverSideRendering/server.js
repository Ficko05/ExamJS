const express = require("express");
const app = express();

const port = 3008;
app.set('view engine', 'ejs');
app.get('/', (req, res) => {
    res.render('index', {person})
})
app.listen(port, () => {
    console.log(`started on port ${port}`)
})


var person ={
    name:"gitte",
    age: 44,
    hobby: "flying"
}