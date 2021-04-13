import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import "./App.css";
import Landing from "./landing";
import SignIn from "./signin";
import SignUp from "./signup";
import MainMenu from "./mainmenu"
import Instructions from "./instructions";
import NewBudget from "./newbudget";
import DisplayBudget from "./displaybudget";
import DataContext from './datacontext';
import accounts from './accounts';
import types  from './types'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  
      user: '',
      budget: [],
      types,
      password: '',
    }
  }

  handleUpdateAccountValue = (account) => {
    let accountNum = Number(account.id)
    let accountVal = Number(account.value)
    let newBudget = [...this.state.budget]
    newBudget.map(obj => {
      if (obj.account === accountNum) obj.amount = accountVal
      return obj
    });
    console.log(newBudget)
    let newState = {
      user: this.state.user,
      password: this.state.password,
      budget: newBudget,
      types
      }
    this.setState(newState)
  }

  handleNewUser = (newUser) => {
    let newState = {
      user: newUser.email,
      password: newUser.password,
      budget: accounts,
      types,
    }
    this.setState(newState)
  }

  handleNewBudget = (newBudget) => {
    const newState = {  
      user: this.state.user,
      password: this.state.password,
      budget: newBudget,
      types,
    }
    this.setState(newState) 
  }

  render() {
    const contextValue = {
      user: this.state.user,
      password: this.state.password,
      budget: this.state.budget,
      types: this.state.types,
      handleNewUser: this.handleNewUser,
      handleNewBudget: this.handleNewBudget,
      handleUpdateAccountValue: this.handleUpdateAccountValue
    }
    console.log(this.state.budget)
    return (
      <div>
        <DataContext.Provider value={contextValue}>
          <nav>
            <li><Link to="/instructions">Instructions</Link></li>
          </nav>
          <main>
            <header>
                <h1>BudgetMaker</h1>
            </header>
            <section>
              <Route exact path="/" component={Landing} />
              <Route path="/signin" component={SignIn}/>
              <Route path="/signup" component={SignUp}/>
              <Route path="/mainmenu" component={MainMenu} />
              <Route path="/instructions" component={Instructions} />
              <Route path="/newbudget" component={NewBudget} />
              <Route path="/displaybudget" component={DisplayBudget}/>
            </section>
          </main>
          {/* <footer>Footer</footer> */}
        </DataContext.Provider>
      </div>
    );
  }
}

export default App;
