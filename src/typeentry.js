import React, { Component } from "react";
import DataContext from "./datacontext";
import { numFormat } from "./budgethelpers";
import { NavLink } from "react-router-dom";

export default class TypeEntry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      budget: [],
      types: [],
      typeNum: "",
    };
  }

  static contextType = DataContext;

  handleChange = (e) => {
    let newBudget = this.state.budget.map((account) => {
      if (account.account === Number(e.target.id)) {
        account.amount = Number(e.target.value);
      }
      return account;
    });
    this.setState({
      budget: newBudget,
      types: this.state.types,
      typeNum: this.state.typeNum,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.context.handleUpdateBudget(this.state.types, this.state.budget);
  };

  componentDidMount() {
    const { budget } = this.context;
    const { types } = this.context;
    let type = types.find(
      (type) => type.type === Number(this.props.match.params.type)
    );
    let nextIdx =
      types.findIndex(
        (type) => type.type === Number(this.props.match.params.type)
      ) + 1;
    let typeNum = types[nextIdx] ? String(types[nextIdx].type) : 0;
    const typeBudget = budget.filter((account) => account.type === type.type);
    this.setState({
      budget: typeBudget,
      types: type,
      typeNum,
    });
  }

  render() {
    let subtotal = this.state.budget.reduce(
      (accum, cv) => accum + cv.amount,
      0
    );
    let accountDisplay = this.state.budget.map((account) => {
      return (
        <div key={account.account}>
          <label htmlFor={account.accountName}>
            <span>{account.accountName}</span>
          </label>
          <input
            className="display-field"
            id={account.account}
            value={account.amount || ""}
            onChange={this.handleChange}
            type="number"
            name={account.accountName}
          />
        </div>
      );
    });
    return (
      <div className="display">
        <h4 className="display-heading">{this.state.types.name}</h4>
        <form onSubmit={this.handleSubmit}>
          {accountDisplay}
          <br />
          <span>{this.state.types.name} Subtotal</span>
          <span>{numFormat(subtotal)}</span>
          <br />
          <button type="submit">Save</button>
        </form>
        <br />
        <NavLink to={`/displaybudget`}>View/Change</NavLink>
        <br />
        <NavLink to={`/mainmenu`}>Main Menu</NavLink>
      </div>
    );
  }
}
