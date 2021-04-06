import React, { Component } from 'react';
import DataContext from './datacontext';
import { numFormat } from './budgethelpers'

export default class SubTotal extends Component {

  static contextType = DataContext;

  render() {
    let type = this.props.type;
    let accounts = this.props.budget.filter(account => account.type === type.type)
    let accountDisplay = accounts.map(account => {
      return (
        <div key={account.account}>
          <span className='display-account'>{account.accountName}</span>
          <br/>
          <span className='display-amount'>{numFormat(account.amount)}</span>
        </div>
      )
    })
    let subtotal = accounts.reduce((accum, account) => accum + Number(account.amount), 0)
    return(
     <div className='display'>
       <h4 className='display-heading'>{type.name}</h4>
        {accountDisplay}
       <h4><span>{`Subtotal ${type.name}`}</span><span>{numFormat(subtotal)}</span></h4>
     </div>
    );
  };
};