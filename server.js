// server.js
// SERVER-SIDE JAVASCRIPT
//requires the express framework to run
const express = require('express');
//creates express object
const app = express();

//starter data, hardcoded to use in key:value pairs
const albums = [
    {
        title: 'Cupid Deluxe',
        artist: 'Blood Orange'
    },
    {
        title: 'M3LL155X - EP',
        artist: 'FKA twigs'
    },
    {
        title: 'Fake History',
        artist: 'letlive.'
    }
    ];

// Allow CORS: we'll use this today to reduce security so we can more easily test our code in the browser.
app.use((req, res, next) => {
res.header("Access-Control-Allow-Origin", "*");
res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
next();
});

//the get request is sent back the index.html to display to the client
app.get('/', (req, res) => res.sendFile('views/index.html'));
app.use(express.static('public'));

//logs to the terminal the contants of req and res
console.log(app.get('/', (req, res) => res.send('Hello World!')));

//server listens at port.env.PORT for production and port #3000 while in development
app.listen(process.env.PORT || 3000,  () => console.log('Example app listening at http://localhost:3000/'));

//enables send of my albums array in json form
app.get('/api/albums', (req, res) => res.json(albums))


//restful routing
//GET and POST api/collection
    //app.get('api/collection', func)reg. res. {res/jspm(collection)}
//GET PUT/PATCH DELETE api/collection/id:74 (74 is the id of the thing in the database)