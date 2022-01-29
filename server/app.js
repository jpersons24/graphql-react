// require express
const express = require('express');
const graphqlExpress = require('express-graphql');
const schema = require('./schema/schema');

const app = express();
const graphqlHTTP = graphqlExpress.graphqlHTTP

app.use('/graphql', graphqlHTTP({
  schema
}))

// express listen to port 4000
app.listen(4000, () => {
  // test server is running by logging to console
  console.log('now listening for requests on port 4000');
});