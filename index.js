const fruityvice= require('./api/fruityvice');
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req,res) => {
    fruityvice.apiCall.get('https://www.fruityvice.com/api/fruit/all')    
    .then(response => res.json(response.data))
    .catch(err => res.status(400).json('Unable to work with API'))
})


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`listening on ${PORT}`));