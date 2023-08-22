import { QuantityComponent } from './styles'

export function InputAmount() {
  return (
    <QuantityComponent>
      <span></span>
      <input type="number" value={1} />
      <span></span>
    </QuantityComponent>
  )
}
