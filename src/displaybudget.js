import React, { Component } from 'react';
import SubTotal from './subtotals'
import DataContext from './datacontext';

export default class DisplayBudget extends Component {

  static contextType = DataContext;

  render() {
    const { currentUser } = this.context
    const user = this.context.users.find(user => user.email === currentUser)
    let accounts = user.budget.accounts
    let display = user.budget.types.map(type => { 
      return (
         <SubTotal key={type.type} type={type} accounts={accounts}/>
       )
    })
    
    let income = accounts.filter(account => account.account === 1001)
    let expAccounts = accounts.filter(account => account.account !== 1001)
    let total = expAccounts.reduce((accum, account) => accum + Number(account.amount), 0)
    let net = income[0].amount - total

    return(
     <div className='display'>
       <h3>Monthly Budget</h3>
       {display}
       <h3><span>Total Expense</span><span>{total}</span></h3>
       <h3><span>Surplus/(Deficit)</span><span>{net}</span></h3>
     </div>
    );
  };
};