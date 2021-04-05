import React, { Component } from 'react';
import DataContext from './datacontext';
import NewBudAccounts from './newbudaccounts';



export default class NewBudget extends Component {
  static contextType = DataContext;
  //This should all be working off of Account
  handleSubmit = (e) => {
    e.preventDefault();
    const { currentUser } = this.context
    const user = this.context.users.find(user => user.email === currentUser)
    user.budget.accounts.map(obj => obj.amount = e.target[`${obj.accountName}`].value)
    //this.context.handleNewBudget(user)
    this.props.history.push('/displaybudget')
  }

  render() {
    const { currentUser } = this.context
    const user = this.context.users.find(user => user.email === currentUser)
    let accounts = user.budget.accounts
    let inputs = user.budget.types.map(type => {
      return (
      <div key={type.type}>
        <NewBudAccounts type={type} accounts={accounts}/>
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