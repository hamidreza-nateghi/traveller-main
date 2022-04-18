import { memo } from 'react'
import type { FC } from 'react'
import { SimpleGrid } from '@chakra-ui/react'
import { CityCard } from '../CityCard/CityCard'
import type { City } from '../CityCard/CityCard'

type CityListProps = {
  list: City[]
}

export const CityList: FC<CityListProps> = memo(({ list }) => {
  return list.length ? (
    <SimpleGrid minChildWidth="180px" spacing={3}>
      {list.map(city => (
        <CityCard key={city.id} {...city} />
      ))}
    </SimpleGrid>
  ) : (
    <p>No city found.</p>
  )
})
