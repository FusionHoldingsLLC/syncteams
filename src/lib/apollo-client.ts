import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { onError } from '@apollo/client/link/error'
import { userAuthStore } from 'src/store/user.store'

const httpLink = createHttpLink({
  uri: 'http://localhost:3001/graphql',
})

// 🔑 Inject token into headers
const authLink = setContext((_, { headers }) => {
  const token = userAuthStore.getState().tokenData?.accessToken
  const tokenType = userAuthStore.getState().tokenData?.tokenType
  return {
    headers: {
      ...headers,
      authorization: token ? `${tokenType} ${token}` : '',
    },
  }
})

// ❌ Handle errors
const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    for (const err of graphQLErrors) {
      // if (
      //   err.extensions?.code === 'UNAUTHENTICATED' || // standard Apollo error
      //   err.extensions?.response?.status === 401 // custom backend response
      // ) {
      //   console.warn('Unauthorized! Logging out...')
      //   userAuthStore.getState().setTokenData(null) // clear token
      //   // optionally redirect to login:
      //   window.location.href = '/login'
      // }
    }
  }
})

export const client = new ApolloClient({
  link: errorLink.concat(authLink).concat(httpLink),
  cache: new InMemoryCache(),
})
