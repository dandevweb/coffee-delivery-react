import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import {
  AddressCard,
  AddressForm,
  CardHeader,
  CheckoutContainer,
  CheckoutItemsCard,
  GeneralInformation,
  Input,
  PaymentCard,
  PaymentSelection,
  DetailsAmount,
} from './styles'
import { useTheme } from 'styled-components'
import { CheckoutItem } from './components/CheckoutItem/Index'

export function Checkout() {
  const theme = useTheme()

  return (
    <CheckoutContainer>
      <div>
        <h2>Complete seu pedido</h2>
        <GeneralInformation>
          <AddressCard>
            <CardHeader>
              <MapPinLine size={22} color={theme['yellow-900']} />
              <div>
                <h3>Endereço de entrega</h3>
                <p>Informe o endereço onde deseja receber seu pedido</p>
              </div>
            </CardHeader>
            <AddressForm>
              <Input width="sm" placeholder="CEP" />
              <Input width="xl" placeholder="Rua" />
              <Input width="sm" placeholder="Número" />
              <Input width="lg" placeholder="Complemento" />
              <Input width="sm" placeholder="Bairro" />
              <Input width="md" placeholder="Cidade" />
              <Input width="xs" placeholder="UF" />
            </AddressForm>
          </AddressCard>

          <PaymentCard>
            <CardHeader>
              <CurrencyDollar size={22} color={theme['purple-500']} />
              <div>
                <h3>Pagamento</h3>
                <p>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </p>
              </div>
            </CardHeader>
            <PaymentSelection>
              <button>
                <CreditCard size={16} color={theme['purple-500']} />
                <span>Cartão de crédito</span>
              </button>

              <button>
                <Bank size={16} color={theme['purple-500']} />
                <span>Cartão de débito</span>
              </button>

              <button>
                <Money size={16} color={theme['purple-500']} />
                <span>Dinheiro</span>
              </button>
            </PaymentSelection>
          </PaymentCard>
        </GeneralInformation>
      </div>

      <div>
        <h2>Cafés selecionados</h2>

        <CheckoutItemsCard>
          <CheckoutItem />
          <CheckoutItem />

          <DetailsAmount>
            <div>
              <span>Total de itens</span>
              <span>2</span>
            </div>

            <div>
              <span>Entrega</span>
              <span>R$ 10,00</span>
            </div>

            <div>
              <h3>Total</h3>
              <h3>R$ 20,00</h3>
            </div>

            <button type="button">Confirmar pedido</button>
          </DetailsAmount>
        </CheckoutItemsCard>
      </div>
    </CheckoutContainer>
  )
}
