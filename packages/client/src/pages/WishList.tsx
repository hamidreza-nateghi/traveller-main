import type { FC } from 'react'
import { useQuery } from '@apollo/client'
import { Spinner } from '@chakra-ui/react'
import { CityList } from '../components/CityList/CityList'
import { GET_WISHLIST } from '../schema'

// I know it's simliar to Visited, but combining them is a trade-off between DRY and readability
export const WishList: FC = () => {
  const { loading, error, data } = useQuery(GET_WISHLIST)

  if (loading) return <Spinner />
  if (error) return <p>error</p>

  return <CityList list={data.cities.cities} />
}
