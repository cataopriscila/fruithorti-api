const axios = require('axios');

const apiCall = axios.create({
    baseURL: 'https://www.fruityvice.com/api/fruit',   
});

module.exports = {        
    apiCall   
    };  