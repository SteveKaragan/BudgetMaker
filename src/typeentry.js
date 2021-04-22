import React, { Component } from "react";
import DataContext from "./datacontext";
import { numFormat } from "./budgethelpers";
import { NavLink } from 'react-router-dom';

export default class TypeEntry extends Component {
    constructor(props) {
      super(props)
      //discuss datatransformations
      this.state = {
        budget: this.props.budget,
        types: this.props.types,
        typeNum: this.props.match.params.type,
      }
    }
  
  static contextType = DataContext;

  

  handleChange = (e) => {
    console.log(e.target.value)
    console.log(e.target.id)
    let newBudget = this.state.budget.map( account => {
      if (account.account === Number(e.target.id)) {
        account.amount = Number(e.target.value)
      }
      return account
    })
    this.setState({
      budget: newBudget,
      types: this.state.types,
      typeNum: this.state.typeNum,
    })
    
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.budget)
    console.log(e.target["Net Pay"].value)
    //this.context.handleUpdateBudget(e)
  }

  componentDidMount() {
    
  }
  
  render() {
    console.log(this.state.budget)
    let type = this.state.types.find(
      (type) => type.type === Number(this.state.typeNum)
    );
    let accounts = this.state.budget.filter(
      (account) => account.type === type.type
    );
    let subtotal = accounts.reduce((accum, cv) => accum + cv.amount, 0);
    let nextIdx = this.state.types.findIndex(type => type.type === Number(this.state.typeNum)) + 1;
    let nextType = this.state.types[nextIdx].type
    
    let accountDisplay = accounts.map((account) => {
      return ( 
        <div key={account.account}>
          <label htmlFor={account.accountName}>
            <span>{account.accountName}</span>
          </label>
          <input
            className="display-field"
            id={account.account}
            //value={account.amount}
            onChange={this.handleChange}
            type="number"
            name={account.accountName}
            //onBlur={(e) => this.context.handleUpdateAccountValue(e.target)}
          />
        </div>
      );
    });
    return (
      <div className="display">
        <h4 className="display-heading">
          {type.name}
        </h4>
        <form onSubmit={this.handleSubmit}>
          {accountDisplay}
          <br />
          <span>{type.name} Subtotal</span>
          <span>{numFormat(subtotal)}</span>
          <br />
          <button type='submit'>Submit</button>
        </form>
        {/* NavLink not working */}
        <NavLink to={`/typeentry/${nextType}`}>Next</NavLink>
      </div>
    );
  }
}