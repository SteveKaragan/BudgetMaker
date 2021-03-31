import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import "./App.css";
import Landing from "./landing";
import SignIn from "./signin";
import SignUp from "./signup";
import Instructions from "./instructions";
import NewBudget from "./newbudget";
import DisplayBudget from "./displaybudget";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [{
        email: 'stevekaragan@gmail.com',
        password: 'abc'
      }]
    }
  }

  handleNewUser = (user) => {
    let newState = {
      users: [this.state.users]
    }
    newState.users.push(user)
    this.setState(newState)
  }

  render() {
    return (
      <div>
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
            <Route path="/signin" 
              render={({ history }) => {
                return <SignIn 
                history={history}
                users={this.state.users}
                />
              }}
            />
            <Route path="/signup" 
              render={({ history }) => {
                return <SignUp
                handleNewUser={this.handleNewUser}
                history={history}
                />
              }} />
            <Route path="/instructions" component={Instructions} />
            <Route path="/newbudget" component={NewBudget} />
            <Route path="/displayBudget" 
              render={() => {
                return <DisplayBudget
                budget={this.props.props}
                />
              }}
            />
          </section>
        </main>
        {/* <footer>Footer</footer> */}
      </div>
    );
  }
}

export default App;
