# Initial Setup

## Technologies Used
- Server
  - Node.js
    - Express
    - GraphQL server
- Database
  - Mongo DB
  - using mLab to emulate Mongo DB
- Client (Browser)
  - React
  - Apollo

_Graphiql tool will be used to test GraphQL queries_

## Initial Setup

Create directory that will be initialized as git repository AND contain you're entire project.

Within the root of that directory, run `npm init` to initialize Node project. (This will create package.json file).
You can then create the server directory as a direct child of your application directory.

You can then start installing the needed dependencies and setting up the basic skeleton of the server.

> ```
>   npm install express
>   npm install graphql
>   npm install express-graphql
> ```

`express-graphql`_expects v 15.8.0_, you may get an error and need to change the graphql version being used if necessary.
