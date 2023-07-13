const express = require('express');
const EventEmitter = require('events');

const app = express();

app.get('/', async (req,res) => {

    res.send('API called');
})

app.get('/search', async (req,res) => {

    res.send('Search API called');
})

app.get('/update', async (req,res) => {

    res.send('Update API called');
})