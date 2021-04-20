import React, { Component } from 'react';
import DataContext from './datacontext';
import NewBudAccounts from './newbudaccounts';
import { NavLink } from 'react-router-dom';
import { numFormat } from './budgethelpers';


export default class NewBudget extends Component {
  static contextType = DataContext;

  render() {
    const { budget } = this.context
    const { types } = this.context
    let inputs = types.map(type => {
      return (
      <div key={type.type}>
        <NewBudAccounts 
        type={type} 
        budget={budget}
        />
      </div>
      )
    })
    let totalExp = budget.reduce((accum, cv) => {
        if (cv.pl !== 10) {
        return accum + cv.amount
      }
        return accum
      }, 0)
    let incomeObj = budget.find(obj => obj.account === 1001)
    return(
      <div>
        <form className='main-input'>
          {inputs}
          <div>
            <br/>
            <span>Total Expense {numFormat(totalExp)}</span>
            <br/>
            <span>Surplus/(Deficit) {numFormat(incomeObj.amount - totalExp)}</span>
          </div>
        </form>
        <br/>
        <NavLink to={'/displaybudget'} >Display Current Budget</NavLink>
      </div>
    );
  };
};