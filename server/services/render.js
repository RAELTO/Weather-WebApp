//this file is going to allow us to render different files using router
//by doing this we replace the callback functions in router.js by calling these exported CB functions instead

const axios = require('axios');//import axios - allow us to make requests

exports.homeRoutes = (req, res) => {
    //Make a get request to /api/data JUST ONE REQUEST

    axios.get('https://simple-weather-rp.herokuapp.com/api/history')
        .then( (response) => {
            console.log(response.data);
            res.render('index', {history: response.data});
        })
        .catch(e => {
            res.send(e);
        });


    //Make multiple requests, one to /api/data1 and another one to /api/data2
    /*axios.all([
        axios.get('http://localhost:3000/api/history'),
        axios.get('http://localhost:3000/api/example')
        ])
        .then(axios.spread((users, properties) => {
        // Both requests are now complete
        console.log(users.data);
        console.log(properties.data);
        res.render('index', {users: users.data, properties: properties.data})
        }));*/
}