const graphql = require('graphql');
const { buildResolveInfo } = require('graphql/execution/execute');


// define schema to describe data in graphql graph

const { GraphQLObjectType, GraphQLString, GraphQLSchema } = graphql;

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
      }
    }
  }
})

module.exports = new GraphQLSchema({
  query: RootQuery
})