import React, { Component } from "react";
import DataContext from "./datacontext";
import { numFormat } from "./budgethelpers";

export default class NewBudAccounts extends Component {
  static contextType = DataContext;

  render() {
    let type = this.props.type;
    let accounts = this.props.budget.filter(
      (account) => account.type === type.type
    );
    let subtotal = accounts.reduce((accum, cv) => accum + cv.amount, 0);
    let accountDisplay = accounts.map((account) => {
      return (
        <div key={account.account}>
          <label htmlFor={account.accountName}>
            <span>{account.accountName}</span>
          </label>
          <input
            className="display-field"
            id={account.account}
            type="number"
            name={account.accountName}
            onBlur={(e) => this.context.handleUpdateAccountValue(e.target)}
          />
        </div>
      );
    });
    return (
      <div className="display">
        <h4 className="display-heading">{type.name}</h4>
        {accountDisplay}
        <br />
        <span>{type.name} Subtotal</span>
        <span>{numFormat(subtotal)}</span>
      </div>
    );
  }
}
