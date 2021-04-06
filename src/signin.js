import React, { Component } from 'react';
import DataContext from './datacontext';

export default class SignIn extends Component {
  
  static contextType = DataContext;

  handleSubmit = (e) => {
    e.preventDefault()
    const { password } = e.target
    if (this.context.password === password.value) {
      this.props.history.push('/mainmenu')
    } else {
      console.log('Wrong Password')
    }
  }

  render() {
    return(
     <div>
       <form className='signin-form' onSubmit={this.handleSubmit}>
            <div>
              <label htmlFor="username">Email</label>
              <input type="text" name='username' id='username' />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input type="password" name='password' id='password' />
            </div>
            <button type='submit'>Sign In</button>
        </form>
     </div>
    );
  };
};