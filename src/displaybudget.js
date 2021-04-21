import React, { Component } from 'react';
import SubTotal from './subtotals'
import DataContext from './datacontext';
import { numFormat } from './budgethelpers';
import { NavLink } from 'react-router-dom';

export default class DisplayBudget extends Component {

  static contextType = DataContext;

  render() {
    const { budget } = this.context
    const { types } = this.context
    
    let display = types.map(type => { 
      return (
         <SubTotal key={type.type} type={type} budget={budget}/>
       )
    })
    
    let income = budget.filter(account => account.account === 1001)
    let expAccounts = budget.filter(account => account.account !== 1001)
    let total = expAccounts.reduce((accum, account) => accum + Number(account.amount), 0)
    let net = income[0].amount - total

    return(
     <div className='display'>
       <h3>Monthly Budget</h3>
       {display}
       <h3><span>Total Expense</span><span>{numFormat(total)}</span></h3>
       <h3><span>Surplus/(Deficit)</span><span>{numFormat(net)}</span></h3>
       <br/>
       <br/>
       <NavLink to={'/newbudget'}>Change Budget</NavLink>
       <br/>
       <NavLink to={'/mainmenu'}>Main Menu</NavLink>
     </div>
    );
  };
};