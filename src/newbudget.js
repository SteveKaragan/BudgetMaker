import React, { Component } from 'react';

export default class NewBudget extends Component {
  render() {
    return(
      <div>
          <form>
            <div>
            <label htmlFor="net-income">Net Income</label>
            <input type="text" name="net-income" placeholder="$6,000" required/>
            </div>
            <div>
            <label htmlFor="housing">Housing</label>
            <input type="text" name="housing" placeholder="$2,000" required/>
            </div>
            <div>
            <label htmlFor="food">Food</label>
            <input type="text" name="food" placeholder="$3,000" required/>
            </div>
            <div>
              <br/>
              <br/>
              <button>Submit</button>
            </div>
          </form>
      </div>
    );
  };
};