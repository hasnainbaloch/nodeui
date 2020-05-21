const express = require('express');
const { readFile }  = require('fs').promises;

const app = express();

app.get('/', async (request, response) => {
    response.send( await readFile('./index.html') );
})

app.listen('2300', () => {
    console.log("App is live");
})