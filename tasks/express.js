const express = require('express');
const open = require('opener');
const colors = require('colors');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 3030;

app.use(express.static('dist'));

app.listen(PORT, () => {
  console.log(`\n${colors.bgGreen(' - Server started - ').black}\n\nListening on localhost:${colors.green(PORT)}\n`);
});

open('http://localhost:3030/');