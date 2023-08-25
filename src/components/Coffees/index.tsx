import { ProductCard } from '../ProductCard'
import { OurCoffeeSection, SectionTitle } from './styles'

const ASSET_PATH = 'http://localhost:5173/src/assets'

const products = [
  {
    id: 1,
    types: ['tradicional'],
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 10.9,
    image: `${ASSET_PATH}/products/tradicional.png`,
  },
  {
    id: 2,
    name: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: 10.9,
    image: `${ASSET_PATH}/products/americano.svg`,
  },
  {
    id: 3,
    name: 'Café com leite',
    description: 'Café com leite, feito com leite integral',
    price: 10.9,
    image: `${ASSET_PATH}/products/gelado.svg`,
  },
  {
    id: 4,
    name: 'Café com leite de soja',
    description: 'Café com leite, feito com leite de soja',
    price: 10.9,
    image: `${ASSET_PATH}/products/cremoso.svg`,
  },
  {
    id: 5,
    name: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    price: 10.9,
    image: `${ASSET_PATH}/products/cremoso.svg`,
  },
  {
    id: 6,
    types: ['tradicional', 'gelado'],
    name: 'Expresso Gelado',
    description: 'Café expresso tradicional com gelo',
    price: 10.9,
    image: `${ASSET_PATH}/products/gelado.svg`,
  },
]

export function Coffees() {
  return (
    <>
      <SectionTitle>
        <h2>Nossos cafés</h2>
      </SectionTitle>
      <OurCoffeeSection>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </OurCoffeeSection>
    </>
  )
}
