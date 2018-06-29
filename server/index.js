const express = require('express');
const bodyParser = require('body-parser');

const app = express();

let customers = [
    {id: 1, name: 'josh'},
    {id: 2000, name: 'brent'},
    {id: 3, name: 'hunter'}
]


app.get('/api/customer_names', (req, res) => {
    res.status(200).json(customers);
})

app.listen(4000, ()=> console.log('server running on port 4000'));