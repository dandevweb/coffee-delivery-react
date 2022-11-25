import { CartButton, LocationButton, NavContainer } from './styles'
import logo from '../../assets/coffee-logo.svg'
import { NavLink } from 'react-router-dom'
import { MapPin, ShoppingCart } from 'phosphor-react'

export function Header() {
  return (
    <header>
      <NavContainer>
        <NavLink to="/">
          <img src={logo} alt="Coffee Delivery Cup" />
        </NavLink>
        <div>
          <LocationButton>
            <MapPin size={22} weight="fill" />
            <span>Porto Alegre, RS</span>
          </LocationButton>
          <NavLink to="checkout" title="Checkout">
            <CartButton>
              <ShoppingCart size={22} weight="fill" />
            </CartButton>
          </NavLink>
        </div>
      </NavContainer>
    </header>
  )
}
