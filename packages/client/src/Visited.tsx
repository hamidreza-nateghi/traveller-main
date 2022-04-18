import type { FC } from 'react'
import { useQuery } from '@apollo/client'
import { Spinner } from '@chakra-ui/react'
import { CityList } from './CityList'
import { GET_VISITED } from './schema'

export const Visited: FC = () => {
  const { loading, error, data } = useQuery(GET_VISITED)

  if (loading) return <Spinner />
  if (error) return null

  return <CityList list={data.cities.cities} />
}
