import type { FC } from 'react'
import { ChakraProvider, Box, Container, VStack, extendTheme } from '@chakra-ui/react'
import { Route, Routes } from 'react-router-dom'
import { TopBar } from './TopBar'
import { Header } from './Header'
import { Home } from './Home'
import { WishList } from './WishList'
import { Visited } from './Visited'

import { MyApolloProvider } from './MyApolloProvider'

const fonts = {
  heading:
    '"Museo Sans", museo-sans, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
  body: '"Lato", lato, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
  // chakra default
  mono: 'SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
}

const components = {
  Spinner: {
    baseStyle: {
      borderWidth: 3,
      color: 'cyan.500',
    },
    defaultProps: {
      size: 'xl',
    },
  },
}

// I moved ApolloProvider here because I make toast on errors and Toast needs to access Chakra theme
export const App: FC = () => (
  <ChakraProvider theme={extendTheme({ fonts, components })}>
    <MyApolloProvider>
      <TopBar />
      <Box textAlign="center">
        <VStack spacing="8">
          <Header />
          <Container maxW="container.md">
            <Routes>
              <Route index element={<Home />} />
              <Route path="wish-list" element={<WishList />} />
              <Route path="visited" element={<Visited />} />
            </Routes>
          </Container>
        </VStack>
      </Box>
    </MyApolloProvider>
  </ChakraProvider>
)
