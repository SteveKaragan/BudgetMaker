import React, { Component } from 'react';

export default class SignUp extends Component {
  
  handleSubmit = (e) => {
    e.preventDefault()
    const { username, password, repeatPassword } = e.target
    let user = {
      email: username.value,
      password: password.value
    }
    this.props.handleNewUser(user)
    this.props.history.push('/signin')
  }
  
  render() {
    return(
     <div>
       <form className='signup-form' onSubmit={this.handleSubmit}>
            <div>
              <label htmlFor="username">Email</label>
              <input type="text" name='username' id='username' />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input type="password" name='password' id='password' />
            </div>
            <div>
              <label htmlFor="repeatPassword">Repeat Password *</label>
              <input type="password" className="registration__control"
              name="repeatPassword" id="repeatPassword"/>
       </div>
            <button type='submit'>Sign Up</button>
        </form>
     </div>
    );
  };
};