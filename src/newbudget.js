import React, { Component } from 'react';
import DataContext from './datacontext';
import NewBudAccounts from './newbudaccounts';

//will need to post newBudget

export default class NewBudget extends Component {
  static contextType = DataContext;
  handleSubmit = (e) => {
    e.preventDefault();
    const { budget } = this.context
    let newBudget = [...budget]
    newBudget.forEach(obj => obj.amount = e.target[`${obj.accountName}`].value)
    this.context.handleNewBudget(newBudget)
    this.props.history.push('/displaybudget')
  }

  render() {
    const { budget } = this.context
    const { types } = this.context
    let inputs = types.map(type => {
      return (
      <div key={type.type}>
        <NewBudAccounts type={type} budget={budget}/>
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