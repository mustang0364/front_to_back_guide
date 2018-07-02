const express = require('express');
const bodyParser = require('body-parser');
const cC = require('./controller/company_controller')
const app = express();
app.use(bodyParser.json());



app.get('/api/company_names', cC.read);
app.post('/api/post_comment', cC.create);
app.delete('/api/post_comment/:id',cC.delete);
app.put('/api/post_comment/:id', cC.edit);





app.listen(4000, ()=> console.log('server running on port 4000'));