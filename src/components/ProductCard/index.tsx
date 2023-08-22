import { ShoppingCart } from 'phosphor-react'
import expressCoffee from '../../assets/products/express-coffee.png'
import {
  ContainerProductCard,
  FooterProductCard,
  MainProductCard,
} from './styles'

export function ProductCard() {
  return (
    <ContainerProductCard>
      <header>
        <div>
          <img src={expressCoffee} alt="Café expresso tradicional" />
          <p>Tradicional</p>
        </div>
      </header>
      <MainProductCard>
        <h3>Expresso Tradicional</h3>
        <p>O tradicional café feito com água quente e grãos moídos</p>
      </MainProductCard>
      <FooterProductCard>
        <span>
          R$ <h3> 9,90</h3>
        </span>
        <div>
          <span></span>
          <input type="number" value={1} />
          <span></span>
        </div>
        <button>
          <ShoppingCart width={22} weight="fill" />
        </button>
      </FooterProductCard>
    </ContainerProductCard>
  )
}
