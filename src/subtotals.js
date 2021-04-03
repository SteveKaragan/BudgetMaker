import React, { Component } from 'react';
import DataContext from './datacontext';

export default class SubTotal extends Component {

  static contextType = DataContext;

  render() {
    let type = this.props.type;
    let accounts = this.props.accounts.filter(account => account.type === type.type)
    let accountDisplay = accounts.map(account => {
      return (
        <p><span>{account.accountName}</span><span>{Number(account.amount)}</span></p>
      )
    })
    let subtotal = accounts.reduce((accum, account) => accum + Number(account.amount), 0)
    return(
     <div>
       <h4>{type.name}</h4>
        {accountDisplay}
       <h4><span>{`Subtotal ${type.name}`}</span><span>{subtotal}</span></h4>
     </div>
    );
  };
};