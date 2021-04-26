import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import "./App.css";
import Landing from "./landing";
import SignIn from "./signin";
import SignUp from "./signup";
import MainMenu from "./mainmenu";
import Instructions from "./instructions";
import NewBudget from "./newbudget"; //probably getting rid of
import DisplayBudget from "./displaybudget";
import TypeEntry from "./typeentry";
import DataContext from "./datacontext";
import accounts from "./accounts";
import types from "./types";
import Analysis from "./analysis";

class App extends Component {
  constructor(props) {
    super(props);
    //do I need user/password in state
    this.state = {
      user: "",
      budget: accounts,
      types,
      password: "",
    };
  }
  //needs review
  handleNewUser = (newUser) => {
    let newState = {
      user: newUser.email,
      password: newUser.password,
      budget: newUser.budget,
      types,
    };
    this.setState(newState);
  };
  //this assigned a budget at sign up, currently assigning budget above
  handleNewBudget = (newBudget) => {
    const newState = {
      user: this.state.user,
      password: this.state.password,
      budget: newBudget,
      types,
    };
    this.setState(newState);
  };
  //This works from Newbudget(big form)
  handleUpdateAccountValue = (account) => {
    let accountNum = Number(account.id);
    let accountVal = Number(account.value);
    let newBudget = [...this.state.budget];
    newBudget.map((obj) => {
      if (obj.account === accountNum) obj.amount = accountVal;
      return obj;
    });
    let newState = {
      user: this.state.user,
      password: this.state.password,
      budget: newBudget,
      types: this.state.types,
    };
    this.setState(newState);
  };
  //supports accordion on display form
  handleTypeVisibility = (type) => {
    let newTypes = [...this.state.types];
    newTypes.map((obj) => {
      if (obj.type === type) obj.visible = !obj.visible;
      return obj;
    });
    let newState = {
      user: this.state.user,
      password: this.state.password,
      budget: this.state.budget,
      types: newTypes,
    };
    this.setState(newState);
  };
  //this is the handle submit
  handleUpdateBudget = (type, typeBudget) => {
    let removeType = this.state.budget.filter(
      (account) => account.type !== type.type
    );
    let newBudget = typeBudget.concat(removeType);
    this.setState({
      user: this.state.user,
      budget: newBudget,
      types: this.state.types,
      password: this.state.password,
    });
  };

  render() {
    //am I overusing context?
    const contextValue = {
      user: this.state.user,
      password: this.state.password,
      budget: this.state.budget,
      types: this.state.types,
      handleNewUser: this.handleNewUser,
      handleNewBudget: this.handleNewBudget,
      handleUpdateAccountValue: this.handleUpdateAccountValue,
      handleTypeVisibility: this.handleTypeVisibility,
      handleUpdateBudget: this.handleUpdateBudget,
    };
    return (
      <div>
        <DataContext.Provider value={contextValue}>
          <nav>
            <li>
              <Link to="/instructions">Instructions</Link>
            </li>
          </nav>
          <main>
            <header>
              <h1>BudgetMaker</h1>
            </header>
            <section>
              <Route exact path="/" component={Landing} />
              <Route path="/signin" component={SignIn} />
              <Route path="/signup" component={SignUp} />
              <Route path="/mainmenu" component={MainMenu} />
              <Route path="/instructions" component={Instructions} />
              <Route path="/newbudget" component={NewBudget} />
              <Route path="/typeentry/:type" component={TypeEntry} />
              <Route path="/displaybudget" component={DisplayBudget} />
              <Route path="/analysis" component={Analysis} />
            </section>
          </main>
          {/* <footer>Footer</footer> */}
        </DataContext.Provider>
      </div>
    );
  }
}

export default App;
