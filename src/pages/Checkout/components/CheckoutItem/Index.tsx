import { Trash } from 'phosphor-react'
import { ItemSingle } from './styles'
import { InputAmount } from '../../../../components/InputAmount'
import { useTheme } from 'styled-components'

import coffeeImage from '../../../../assets/products/express-coffee.png'

export function CheckoutItem() {
  const theme = useTheme()

  return (
    <ItemSingle>
      <img src={coffeeImage} alt="Expresso Tradicional" />
      <div>
        <h3>Expresso Tradicional</h3>
        <div>
          <InputAmount />
          <button>
            <Trash size={16} color={theme['purple-500']} />
            <span>remover</span>
          </button>
        </div>
      </div>
      <p>R$ 9,90</p>
    </ItemSingle>
  )
}
