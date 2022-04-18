import { ApolloClient, InMemoryCache, HttpLink, from, ApolloProvider } from '@apollo/client'
import { onError } from '@apollo/client/link/error'
import { useToast } from '@chakra-ui/react'

export const MyApolloProvider: typeof ApolloProvider = ({ children }) => {
  const toast = useToast()

  const httpLink = new HttpLink({
    uri: 'http://localhost:4000/graphql',
  })

  const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors)
      graphQLErrors.forEach(({ message }) =>
        toast({
          title: 'GraphQL error',
          description: message,
          status: 'error',
          duration: 3000,
          isClosable: true,
        })
      )
    else if (networkError) {
      toast({
        title: 'Network error',
        description: networkError.message,
        status: 'error',
        duration: 3000,
        isClosable: true,
      })
    }
  })

  const client = new ApolloClient({
    link: from([errorLink, httpLink]),
    cache: new InMemoryCache(),
  })

  return <ApolloProvider client={client}>{children}</ApolloProvider>
}
