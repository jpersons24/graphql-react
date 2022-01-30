import React, { useEffect, useState } from 'react'
import { gql, useQuery } from '@apollo/client';
import { client } from '../App';

const getBooksQuery = gql`
  {
    books{
      name
      genre
      id
    }
  }
`

export const BookList = () => {

  // useQuery hook
  const { loading, error, data } = useQuery(getBooksQuery);

  return (
    <div>
      { loading ? <h4>Loading...</h4> : null }
      { error ? <h4>Error!</h4> : null}
      <ul>
        {data.books.map(b => {
          return (
            <li key={b.id}>
              {b.name} ({b.genre})
            </li>
          )
        })}
      </ul>
    </div>
  )
}

