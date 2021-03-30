import React, { Component } from 'react';

export default class SignIn extends Component {
  render() {
    return(
     <div>
       <form class='signup-form'>
            <div>
              <label for="username">Email</label>
              <input type="text" name='username' id='username' />
            </div>
            <div>
              <label for="password">Password</label>
              <input type="password" name='password' id='password' />
            </div>
            <button type='submit'>Sign In</button>
        </form>
     </div>
    );
  };
};