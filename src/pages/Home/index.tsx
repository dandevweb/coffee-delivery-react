import {
  HomeContainer,
  IconContainer,
  IntroSection,
  ProductsSection,
} from './styles'
import introImg from '../../assets/intro-img.png'
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import { ProductCard } from '../../components/ProductCard'

export function Home() {
  return (
    <HomeContainer>
      <IntroSection>
        <div>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <h3>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </h3>
          <ul>
            <li>
              <IconContainer bgColor="orange">
                <ShoppingCart width={16} weight="fill" />
              </IconContainer>
              <p>Compra simples e segura</p>
            </li>
            <li>
              <IconContainer bgColor="gray">
                <Package width={16} weight="fill" />
              </IconContainer>
              <p>Compra simples e segura</p>
            </li>
            <li>
              <IconContainer bgColor="yellow">
                <Timer width={16} weight="fill" />
              </IconContainer>
              <p>Compra simples e segura</p>
            </li>
            <li>
              <IconContainer bgColor="purple">
                <Coffee width={16} weight="fill" />
              </IconContainer>
              <p>Compra simples e segura</p>
            </li>
          </ul>
        </div>
        <img src={introImg} alt="" />
      </IntroSection>
      <ProductsSection>
        <ProductCard />
      </ProductsSection>
    </HomeContainer>
  )
}
