const request = require('request')

//gets a url
function get(url) {
	//promise a url
    return new Promise((resolve, reject) => {
        request.get(url, function (err, response, body) {
            if (err) {
                reject(err)
                return;
            }

            resolve({
                ...response,
                body
            })
        })
    })
}


const url = "http://google.com"; 
get(url)
    .then(response => console.log(response.statusCode))
    .catch(e => console.error("An error occured: " + e.message));

//Immediately invoked function expression
//runs immedatly 
(async function () {
    try {
        const response = await get(url)
        console.log(response.statusCode)
    } catch (e) {
        console.error("An error occured: " + e.message)
    }
})()