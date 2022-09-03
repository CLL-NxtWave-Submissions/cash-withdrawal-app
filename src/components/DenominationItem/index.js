import './index.css'

const DenominationItem = props => {
  const {denominationValue, cashWithdrawalEventHandler} = props

  return (
    <button
      type="button"
      className="denomination-item-button"
      onClick={cashWithdrawalEventHandler}
    >
      {denominationValue}
    </button>
  )
}

export default DenominationItem
