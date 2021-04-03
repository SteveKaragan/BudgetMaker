import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import "./App.css";
import Landing from "./landing";
import SignIn from "./signin";
import SignUp from "./signup";
import budget from "./store";
import Instructions from "./instructions";
import NewBudget from "./newbudget";
import DisplayBudget from "./displaybudget";
import DataContext from './datacontext'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [{
        email: 'stevekaragan@gmail.com',
        password: 'abc',
        budget: budget,
      }],
      currentUser: ''
    }
  }

  //discuss with Jeremy ...
  handleNewUser = (user) => {
    let newState = {
      users: this.state.users,
    }
    newState.users.push(user)
    this.setState(newState)
  }

  handleSetCurrentUser = (user) => {
    let newState = {
      users: this.state.users,
      currentUser: user.email
    }
    this.setState(newState)
  }

  handleNewBudget = (user) => {
    const newUsers = this.state.users.filter(person => person.email !== user.email)
    newUsers.push(user)
    this.setState({
      users: newUsers,
      currentUser: user.email
    }) 
  }

  render() {
    const contextValue = {
      users: this.state.users,
      currentUser: this.state.currentUser,
      handleNewUser: this.handleNewUser,
      handleSetCurrentUser: this.handleSetCurrentUser,
      handleNewBudget: this.handleNewBudget
    }
    console.log(this.state)
    return (
      <div>
        <DataContext.Provider value={contextValue}>
          <nav>
            <li><Link to="/instructions">Instructions</Link></li>
          </nav>
          <main>
            <header>
              <Link to="/">
                <h1>BudgetMaker</h1>
              </Link>
            </header>
            <section>
              <Route exact path="/" component={Landing} />
              <Route path="/signin" component={SignIn}/>
              <Route path="/signup" component={SignUp}/>
              <Route path="/instructions" component={Instructions} />
              <Route path="/newbudget" component={NewBudget} />
              {/* <Route path="/displayBudget" component={DisplayBudget}/> */}
            </section>
          </main>
          {/* <footer>Footer</footer> */}
        </DataContext.Provider>
      </div>
    );
  }
}

export default App;
