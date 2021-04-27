import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import DataContext from "./datacontext";

export default class MainMenu extends Component {
  static contextType = DataContext;

  render() {
    return (
      <div>
        <h2>Main Menu</h2>
        <h3>Time to make your monthly budget!</h3>
        <h4>If you are a new user start with Create Budget Below</h4>
        <br />
        <NavLink to={"/displaybudget"}>View/Change</NavLink>
        <br />
        <NavLink to={"/analysis"}>Analysis</NavLink>
      </div>
    );
  }
}
