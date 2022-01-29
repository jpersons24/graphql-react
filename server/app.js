// require express
const express = require('express');

const app = express();

// express listen to port 4000
app.listen(4000, () => {
  // test server is running by logging to console
  console.log('now listening for requests on port 4000');
});