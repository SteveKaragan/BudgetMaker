import React, { Component } from 'react';

export default class DisplayBudget extends Component {
  render() {
    const { budget } = this.props
    let arr = Object.keys(budget)
    return(
     <div>
       <h3>Monthly Budget</h3>
       <p><span>Net Income</span><span>{budget.netIncome}</span></p>
       <h3>Expense</h3>
       <p><span>housing</span><span>{budget.housing}</span></p>
       <p><span>Food</span><span>{budget.food}</span></p>
       <p><span>Total Expense</span><span>{budget.food + budget.housing}</span></p>
       <h3>Total Net Income</h3>
       <p><span>{budget.netIncome - budget.housing - budget.food}</span></p>
     </div>
    );
  };
};