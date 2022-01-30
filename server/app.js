// require express
const express = require('express');
const graphqlExpress = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require ('mongoose');
const cors = require('cors');

const app = express();

// allow cross origin requests
app.use(cors());

const graphqlHTTP = graphqlExpress.graphqlHTTP

mongoose.connect(
	"mongodb+srv://Jake:test123@gql-cluster.mapfu.mongodb.net/gql-cheeseburger-eddie?retryWrites=true&w=majority"
);
mongoose.connection.once('open', () => {
  console.log('conntected to database');
})

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true,
}))

// express listen to port 4000
app.listen(4000, () => {
  // test server is running by logging to console
  console.log('now listening for requests on port 4000');
});