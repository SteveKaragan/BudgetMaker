import React, { Component } from 'react';
import DataContext from './datacontext';

export default class SignIn extends Component {
  
  static contextType = DataContext;

  handleSubmit = (e) => {
    e.preventDefault()
    const { username, password } = e.target
    const user = this.context.users.find(obj => obj.email === username.value);
    if (user.password === password.value) {
      this.context.handleSetCurrentUser(user)
      this.props.history.push('/newbudget')
    } else {
      //How do I get this into JSX?
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