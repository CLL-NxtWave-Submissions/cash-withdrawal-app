import {Component} from 'react'
import DenominationItem from '../DenominationItem'
import './index.css'

export default class CashWithdrawal extends Component {
  state = {
    balance: 2000,
  }

  withdrawDenominationAndUpdateBalance = withdrawalDenominationAmount => {
    this.setState(previousBalanceState => ({
      balance: previousBalanceState.balance - withdrawalDenominationAmount,
    }))
  }

  render() {
    const {balance} = this.state
    const {denominationsList} = this.props

    return (
      <div className="cash-withdrawal-bg-container">
        <div className="cash-withdrawal-content-container">
          <div className="user-details-container">
            <p className="user-initial">S</p>
            <p className="user-name">Sarah Williams</p>
          </div>
          <div className="balance-details-container">
            <p className="balance-label">Your Balance</p>
            <div className="balance-value-container">
              <p className="balance-value">{balance}</p>
              <p className="currency-text">In Rupees</p>
            </div>
          </div>
          <div className="withdraw-content-container">
            <p className="withdraw-content-header">Withdraw</p>
            <p className="withdraw-content-description">
              CHOOSE SUM (IN RUPEES)
            </p>
            <div className="withdraw-denominations-container">
              {denominationsList.map(denominationItem => (
                <DenominationItem
                  denominationValue={denominationItem.value}
                  cashWithdrawalEventHandler={
                    this.withdrawDenominationAndUpdateBalance
                  }
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
