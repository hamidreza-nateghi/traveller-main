import { gql } from '@apollo/client'

export const GET_CITIES = gql`
  query GetCities($filter: CitiesFilters) {
    cities(filter: $filter) {
      cities {
        id
        name
        country
        visited
        wishlist
      }
    }
  }
`

export const GET_VISITED = gql`
  query GetVisited {
    cities(filter: { visited: true }) {
      cities {
        id
        name
        country
        visited
        wishlist
      }
    }
  }
`

export const GET_WISHLIST = gql`
  query GetWishlist {
    cities(filter: { wishlist: true }) {
      cities {
        id
        name
        country
        visited
        wishlist
      }
    }
  }
`

export const ADD_TO_LIST = gql`
  mutation AddToList($input: CitiesMutationInput) {
    updateCity(input: $input) {
      name
      id
      visited
      wishlist
    }
  }
`
