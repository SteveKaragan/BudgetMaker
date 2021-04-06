import React, { Component } from 'react';
import DataContext from './datacontext';

export default class NewBudAccounts extends Component {

  static contextType = DataContext;

  render() {
    let type = this.props.type;
    let accounts = this.props.budget.filter(account => account.type === type.type)
    let accountDisplay = accounts.map(account => {
      return (
        <div key={account.account}>
          <label htmlFor={account.accountName}><span>{account.accountName}</span></label>
          <input className="display-field" type="number" name={account.accountName} placeholder="0" defaultValue={account.amount}/>
        </div>
      )
    })
    return(
     <div className='display'  >
       <h4 className='display-heading'>{type.name}</h4>
        {accountDisplay}
     </div>
    );
  };
};