import { ShoppingCart } from 'phosphor-react'
import {
  ContainerProductCard,
  FooterProductCard,
  MainProductCard,
} from './styles'
import { InputAmount } from '../InputAmount'

interface ProductProps {
  id: number
  types?: Array<string>
  name: string
  description: string
  price: number
  image: string
}

export function ProductCard({ product }: { product: ProductProps }) {
  return (
    <ContainerProductCard>
      <header>
        <div>
          <img src={product.image} alt="{product.name}" />
          <p>
            {product.types
              ? product.types?.map((type) => <span key={type}>{type}</span>)
              : 'tradicional'}
          </p>
        </div>
      </header>
      <MainProductCard>
        <h3>{product.name}</h3>
        <p>{product.description}</p>
      </MainProductCard>
      <FooterProductCard>
        <span>
          R$ <h3> {product.price}</h3>
        </span>
        <InputAmount />
        <button>
          <ShoppingCart width={22} weight="fill" />
        </button>
      </FooterProductCard>
    </ContainerProductCard>
  )
}
