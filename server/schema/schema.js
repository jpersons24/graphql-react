const graphql = require('graphql');
const { buildResolveInfo } = require('graphql/execution/execute');
const _ = require('lodash');


// define schema to describe data in graphql graph

const { GraphQLObjectType, GraphQLString, GraphQLSchema } = graphql;

// dummy data
let books = [
  { name: 'Name of the Wind', genre: 'Fatnasy', id: '1' },
  { name: 'The Final Empire', genre: 'Fantasy', id: '2' },
  { name: 'The Long Earth', genre: 'Sci-Fi', id: '3' }
]

const BookType = new GraphQLObjectType({
  name: 'Book',
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    genre: { type: GraphQLString }
  })
});

// route queries are initial entry points into Graph
const RootQuery = new GraphQLObjectType({
  name: 'RoorQueryType',
  fields: {
    book: {
      type: BookType,
      args: {
        id: { type: GraphQLString }
      },
      resolve(parent, args){
        // code to get data from db / other source

        // use lodash to .find() a book with certain id from books array
        return _.find(books, { id: args.id });
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});