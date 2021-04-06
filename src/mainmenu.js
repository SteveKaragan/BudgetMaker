import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import DataContext from './datacontext';

export default class MainMenu extends Component {
  
  static contextType = DataContext;

  render() {
    return(
     <div>
       <h2>Main Menu</h2>
       <NavLink to={'/newbudget'} >Create New Budget</NavLink>
       <br/>
       <NavLink to={'/newBudget'} >Update Current Budget</NavLink>
       <br/>
       <NavLink to={'/displaybudget'} >Display Current Budget</NavLink>
     </div>
    )

  }

}