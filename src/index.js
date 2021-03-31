import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import App from './App';
import './index.css';
import budget from './store';

ReactDOM.render(
<BrowserRouter>
  <App props={budget}/>
</BrowserRouter>, 
document.getElementById('root'));
