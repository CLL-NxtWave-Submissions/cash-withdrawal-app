import './index.css'

const DenominationItem = props => {
  const {denominationValue, cashWithdrawalEventHandler} = props

  const onClickWithdrawDenominationHandler = () =>
    cashWithdrawalEventHandler(denominationValue)

  return (
    <li
      className="denomination-item"
      onClick={onClickWithdrawDenominationHandler}
    >
      <button
        type="button"
        className="denomination-item-button"
        onClick={onClickWithdrawDenominationHandler}
      >
        {denominationValue}
      </button>
    </li>
  )
}

export default DenominationItem
