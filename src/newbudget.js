import React, { Component } from 'react';
import DataContext from './datacontext';



export default class NewBudget extends Component {
  static contextType = DataContext;
  //This should all be working off of Account
  handleSubmit = (e) => {
    e.preventDefault();
    const { currentUser } = this.context
    const user = this.context.users.find(user => user.email === currentUser)
    user.budget.accounts.map(obj => obj.amount = e.target[`${obj.accountName}`].value)
    this.context.handleNewBudget(user)
    this.props.history.push('/displaybudget')
  }

  render() {
    const { currentUser } = this.context
    const user = this.context.users.find(user => user.email === currentUser)
    let budget = user.budget.accounts
    let inputs = budget.map(account => {
      return (
      <div key={account.account}>
        <label htmlFor={account.accountName}>{account.accountName}</label>
        <input type="number" name={account.accountName} placeholder="1"/>
      </div>
      )
    })
    return(
      <div>
          <form className='main-input' onSubmit={this.handleSubmit}>
            {inputs}
            <div>
              <br/>
              <br/>
              <button>Submit</button>
            </div>
          </form>
      </div>
    );
  };
};