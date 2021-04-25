import React, { Component } from "react";
import DataContext from "./datacontext";
import { numFormat, percentFormat } from "./budgethelpers";
import { NavLink } from "react-router-dom";

export default class SubTotal extends Component {
  static contextType = DataContext;

  render() {
    let type = this.props.type;
    let accounts = this.props.budget.filter(
      (account) => account.type === type.type
    );
    let accountDisplay = accounts.map((account) => {
      return (
        <div key={account.account}>
          <span className="display-account">{account.accountName}</span>
          <br />
          <span className="display-amount">{numFormat(account.amount)}</span>
        </div>
      );
    });
    let subtotal = accounts.reduce(
      (accum, account) => accum + Number(account.amount),
      0
    );
    return (
      <div className="display">
        <h4 className="display-heading">
          <span>
            <button
              onClick={() => this.context.handleTypeVisibility(type.type)}
            >
              {type.visible ? "-" : "+"}
            </button>
          </span>
          <NavLink to={`/typeentry/${type.type}`}>{type.name}</NavLink>
        </h4>
        {type.visible === true ? accountDisplay : null}
        <h4>
          <span>{`Subtotal ${type.name}`}</span>
          <span>{numFormat(subtotal)}</span>
          <span>
            {type.type === 10 ? (
              <span></span>
            ) : subtotal / this.props.total ? (
              percentFormat(subtotal / this.props.total)
            ) : (
              "0%"
            )}
          </span>
        </h4>
      </div>
    );
  }
}
