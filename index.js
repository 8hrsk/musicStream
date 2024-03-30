//start coding 
const { Station } = require('@kefir100/radio-engine');
const express = require('express');

const server = express();
const station = new Station();

station.addFolder('./music');

server.get('/stream', (req, res) => {
  station.connectListener(req, res);
});

server.listen(3000, () => {
  console.log(`started on http://localhost:3000/stream`);
});

station.start();