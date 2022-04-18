import { memo } from 'react'
import type { FC } from 'react'
import { useMutation } from '@apollo/client'
import { Box, HStack, IconButton, Tooltip } from '@chakra-ui/react'
import { StarIcon } from '@chakra-ui/icons'
import { FaSuitcaseRolling } from 'react-icons/fa'
import { GET_VISITED, GET_WISHLIST, ADD_TO_LIST } from './schema'

export type City = {
  id: number
  name: string
  country: string
  visited: boolean
  wishlist: boolean
}

const AddButton = ({ cityId, icon, property, list, refetchQueries }: any) => {
  const [addToList, { loading }] = useMutation(ADD_TO_LIST, { refetchQueries })

  const handleClick = () => addToList({ variables: { input: { id: cityId, [property]: !list } } })

  const label = `${list ? 'Remove from' : 'Add to'} ${property}`

  return (
    <Tooltip hasArrow label={label} aria-label={`tooltip ${property}`}>
      <IconButton
        aria-label={`${property} button`}
        icon={icon}
        colorScheme={list ? 'cyan' : 'gray'}
        variant="ghost"
        isRound
        fontSize={24}
        onClick={handleClick}
        isLoading={loading}
      />
    </Tooltip>
  )
}

export const CityCard: FC<City> = memo(props => {
  const { id, name, country, visited, wishlist } = props

  return (
    <Box textAlign="initial" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Box p="6">
        <HStack justifyContent="right" width="100%">
          <AddButton
            cityId={id}
            icon={<FaSuitcaseRolling />}
            property="visited"
            list={visited}
            refetchQueries={[GET_VISITED, 'GetVisited']}
          />
          <AddButton
            cityId={id}
            icon={<StarIcon />}
            property="wishlist"
            list={wishlist}
            refetchQueries={[GET_WISHLIST, 'GetWishlist']}
          />
        </HStack>
        <Box fontWeight="semibold" as="h4" lineHeight="tight">
          {name}
        </Box>
        <Box>{country}</Box>
      </Box>
    </Box>
  )
})
