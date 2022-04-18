import { screen } from '@testing-library/react'
import { render } from '../../test-utils'
import { CityCard } from './CityCard'

describe('<CityCard /> component', () => {
  beforeEach(() => {
    render(<CityCard id={0} name="London" country="United Kingdom" visited={false} wishlist={false} />)
  })

  it('renders city name', () => {
    expect(screen.getByText(/^London$/i)).toBeTruthy()
  })

  it('renders country name', () => {
    expect(screen.getByText(/^United Kingdom$/i)).toBeTruthy()
  })
})
