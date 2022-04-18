import { screen } from '@testing-library/react'
import { render } from '../../test-utils'
import { CityList } from './CityList'

describe('<CityList /> component', () => {
  it('renders no data when list is empty', () => {
    const { getByText } = render(<CityList list={[]} />)
    expect(getByText(/^No city found.$/i)).toBeTruthy()
  })

  it('renders data when list is not empty', () => {
    render(<CityList list={[{ id: 0, name: 'London', country: 'United Kingdom', visited: false, wishlist: false }]} />)
    expect(screen.queryByText(/^No city found.$/i)).not.toBeInTheDocument()
  })
})
