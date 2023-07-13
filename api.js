const express = require('express');
const connect = require('./config');
const mongodb = require('mongodb');
const app = express();

app.use(express.json()); // we this to get data from post like body

// get (Read API)
app.get('/', async(req,resp) => {
    let data = await connect();
    dateDetails = await data.find({}).toArray();
   // console.log(dateDetails);
    resp.send(dateDetails);
})

//  post (Insert API)
app.post('/', async (req,resp) => {
    let data = await connect();
    let result = await data.insertOne(req.body);

    resp.send(result);
})

// put (Update API)
app.put('/:name', async (req, resp) => {
    let data = await connect();
    let result = await data.updateOne({title: req.params.name},{$set: req.body} )
        resp.send({result: "Data Successfully Update!"});

})

// delete (Delete API)
app.delete('/:id', async (req, resp) => {
    let data = await connect();
    let result = await data.deleteOne({_id: new mongodb.ObjectId(req.params.id)}
    )
    
    resp.send({result: "Data Delete Successfully"})
})

app.listen(5000);