import React, { Component } from 'react';

export default class SignIn extends Component {
  

  handleSubmit = (e) => {
    e.preventDefault()
    const { username, password } = e.target
    const user = this.props.users.find(obj => obj.email === username.value);
    (user.password === password.value) ? this.props.history.push('/newbudget') :
    console.log('Wrong password')
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