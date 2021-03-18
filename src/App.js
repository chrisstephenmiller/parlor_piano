import React from 'react'
import './App.css'

import { ProvideAuth } from './auth'
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client'

import { Home } from './components'
const client = new ApolloClient({ uri: '/graphql', cache: new InMemoryCache() })

const App = () => {
  return (
    <ProvideAuth>
      <ApolloProvider client={client}>
        <Home />
      </ApolloProvider>
    </ProvideAuth>
  )
}

export default App
