const express = require('express');
const path = require('path');
const port = process.env.PORT || 3000;
const app = express();
const config = require('config');

if (config.webpack.onStart) {
  const childProcess = require('child_process');
  childProcess.exec('webpack -w');
}

app.use(express.static(__dirname + '/public'));

// Send single-page app
app.get('*', function (req, res){
  res.setHeader('Cache-Control', 'no-cache')
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
});

app.listen(port);
