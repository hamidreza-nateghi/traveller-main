import type { FC } from 'react'
import { useLocation } from 'react-router'
import { Heading } from '@chakra-ui/react'

export const Header: FC = () => {
  const { pathname } = useLocation()

  return <Heading as="h1">{title[pathname]}</Heading>
}

const title: Record<string, string> = {
  '/': 'Smart traveller',
  '/visited': 'Visited',
  '/wish-list': 'Wish list',
}
