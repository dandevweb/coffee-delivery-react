import { Clock, CurrencyDollar, MapPin } from 'phosphor-react'

import deliveryman from '../../assets/deliveryman.svg'
import { OrderInfo, SuccessContainer, SuccessContent } from './styles'
import { useTheme } from 'styled-components'
import { IconContainer } from '../Home/styles'

export function Success() {
  const theme = useTheme()

  return (
    <SuccessContainer>
      <h2>Uhu! Pedido confirmado</h2>
      <p>Agora é só aguardar que logo o café chegará até você</p>
      <SuccessContent>
        <OrderInfo>
          <div>
            <IconContainer bgColor="purple">
              <MapPin size={16} weight="fill" />
            </IconContainer>
            <p>
              Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
              <br />
              Farrapos - Porto Alegre, RS
            </p>
          </div>

          <div>
            <IconContainer bgColor="yellow">
              <Clock size={16} weight="fill" />
            </IconContainer>
            <p>
              Previsão de entrega <br /> <strong>20 min - 30 min</strong>
            </p>
          </div>

          <div>
            <IconContainer bgColor="orange">
              <CurrencyDollar size={16} />
            </IconContainer>
            <p>
              Pagamento na entrega <br /> <strong>Cartão de Crédito</strong>
            </p>
          </div>
        </OrderInfo>
        <img src={deliveryman} alt="" />
      </SuccessContent>
    </SuccessContainer>
  )
}
