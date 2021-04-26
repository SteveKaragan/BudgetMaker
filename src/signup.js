import React, { Component } from "react";
import accounts from "./accounts";
import DataContext from "./datacontext";

export default class SignUp extends Component {
  static contextType = DataContext;
  //this needs to change
  handleSubmit = (e) => {
    e.preventDefault();
    const { username, password, repeatPassword } = e.target;
    //budget was just budget: budget
    let newUser = {
      email: username.value,
      password: password.value,
      budget: accounts,
    };
    this.context.handleNewUser(newUser);
    this.props.history.push("/mainmenu");
  };

  render() {
    return (
      <div>
        <form className="signup-form" onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="username">Email</label>
            <input type="text" name="username" id="username" />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" />
          </div>
          <div>
            <label htmlFor="repeatPassword">Repeat Password *</label>
            <input
              type="password"
              className="registration__control"
              name="repeatPassword"
              id="repeatPassword"
            />
          </div>
          <button type="submit">Sign Up</button>
        </form>
      </div>
    );
  }
}
