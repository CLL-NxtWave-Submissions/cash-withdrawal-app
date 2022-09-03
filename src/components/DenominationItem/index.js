import './index.css'

const DenominationItem = props => {
  const {denominationValue, cashWithdrawalEventHandler} = props

  const onClickWithdrawDenominationHandler = () =>
    cashWithdrawalEventHandler(denominationValue)

  return (
    <button
      type="button"
      className="denomination-item-button"
      onClick={onClickWithdrawDenominationHandler}
    >
      {denominationValue}
    </button>
  )
}

export default DenominationItem
