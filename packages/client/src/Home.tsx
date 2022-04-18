import React from 'react'
import type { FC } from 'react'
import { useLazyQuery } from '@apollo/client'
import { Box, InputRightElement, Input, InputGroup, IconButton, Spinner } from '@chakra-ui/react'
import { Search2Icon } from '@chakra-ui/icons'
import { CityList } from './CityList'
import { GET_CITIES } from './schema'

export const Home: FC = () => {
  const [value, setValue] = React.useState('')
  const handleChange = (event: any) => setValue(event.target.value)
  const handleSearch = () => findCity({ variables: { filter: { name: value } } })

  const [findCity, { loading, data }] = useLazyQuery(GET_CITIES)

  const renderList = () => {
    if (loading) return <Spinner />

    if (data) return <CityList list={data?.cities.cities} />

    // I skip error check since we handle error in ApolloProvider
    return null
  }

  return (
    <>
      <InputGroup>
        <Input value={value} onChange={handleChange} />
        <InputRightElement
          children={<IconButton onClick={handleSearch} aria-label="search cities" icon={<Search2Icon />} />}
        />
      </InputGroup>
      <Box mt="8">{renderList()}</Box>
    </>
  )
}
