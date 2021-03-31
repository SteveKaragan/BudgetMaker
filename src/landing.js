import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class Landing extends Component {
  render() {
    return(
     <div>
       <p>Start here</p>
       <Link to="/signup">Sign Up</Link>
       <br/>
       <Link to="/signin">Sign In</Link>
     </div>
    );
  };
};