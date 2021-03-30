import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import Landing from './landing';
import SignIn from './signin';
import SignUp from './signup';
import Instructions from './instructions';

class App extends Component {
  render() {
    return (
      <body>
        <nav>
          <li><Link to='/signup'>Sign Up</Link></li>
          <li><Link to='/signin'>Sign In</Link></li>
          <li><Link to='/instructions'>Instructions</Link></li>
        </nav>
        <main>
          <header><Link to='/'><h1>BudgetMaker</h1></Link></header>
          <section>
            <Route exact path='/' component={Landing}/>
            <Route path='/signin' component={SignIn}/>
            <Route path='/signup' component={SignUp}/>
            <Route path='/instructions' component={Instructions}/>
          </section>
        </main>
        <footer>Footer</footer>
      </body>
    );
  }
}

export default App;
