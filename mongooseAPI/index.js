const express = require('express');
require('./config');
const product = require('./product');

const app = express();;
app.use(express.json());

// Search API
app.get('/search/:key', async (req,res) => {
    //console.log(req.params.key);
    let data = await product.find({
        '$or':[
            {'name':{$regex:req.params.key}},
            {'brand':{$regex:req.params.key}},
            {'category':{$regex:req.params.key}}
        ]
    })
    res.send(data);

})


// Insert data
app.post('/create', async (req,res) => {
    let data = new product(req.body);
    let result = await data.save();

    console.log(result)
    res.send(result);
})

// Get Data
app.get('/list', async (req, res) => {
    let data = await product.find();

    res.send(data);
})

// Delete API
app.delete('/delete/:_id', async (req,res) => {
   // console.log(req.params);
    let data = await product.deleteOne(req.params);
    res.send(data);
})

// Update API
app.put('/update/:_id', async (req,res) => {
    // console.log(req.params);
     let data = await product.updateOne(req.params,{$set: req.body});
     res.send(data);
 })

app.listen(5000);;