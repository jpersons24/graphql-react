import React from 'react';
import { BookList } from './components/BookList';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

// ApolloProvider wraps application and takes client from ApolloClient as argument

// apollo client setup
export const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
});

function App() {
  console.log('rendering app')
  return (
		<ApolloProvider client={client}>
			<div className="app">
				<h1>Reading List</h1>
				<BookList />
			</div>
		</ApolloProvider>
  );
};

export default App;
