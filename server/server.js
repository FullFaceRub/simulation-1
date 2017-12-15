const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = new express();
const controller = require('./shelfcontroller');
const massive = require('massive');
const port = process.env.PORT || 4000

app.use(cors());
app.use(bodyParser.json());

// app.post('/api/bin', controller.create)//add inventory to bin
// app.get('/api/bin/:id', controller.getOne)
// app.put('/api/bin/:id', controller.edit)
// app.delete('/api/bin/:id',controller.delete)

//***********************************************/
massive(process.env.CONNECTION_STRING).then(db=> {
    app.set('db', db);
    app.listen(port, ()=>{
        console.log(`That's no moon! It's a port ${port}`)
    })
})
