import React, { Component } from "react";
import { Chart } from "react-google-charts";
import DataContext from "./datacontext";

export default class Analysis extends Component {
  static contextType = DataContext;

  render() {
    
    const { types } = this.context;
    const { budget } = this.context;
    let typesNoIncome = types.filter((type) => type.type > 99);
    let dataArr = [];
    dataArr.push(
      typesNoIncome.map((type) => {
        let total = budget.reduce((accum, acct) => {
          if (acct.type === type.type) {
            return accum + acct.amount;
          }
          return accum;
        }, 0);
        return [type.name, total];
      })
    );
    dataArr[0].unshift(["Type", "Amount"]);
    console.log(dataArr);
    return (
      <div>
        <h2>Charting & Analysis</h2>
        <section className="display-chart">
          <Chart
            width={"500px"}
            height={"300px"}
            chartType="PieChart"
            loader={<div>Loading Chart</div>}
            data={
              [
                  ["type", "amount"],
                  ["Net Pay", 0],
                  ["housing", 2000],
                  ["Transportaiton", 1000],
                  ["Food", 0],
                  ["gobble", 500],
                  ["Net Pay", 0],
                  ["housing", 2000],
                  ["Transportaiton", 1000],
                  ["Food", 0],
                  ["gobble", 500],
                  ["Net Pay", 0],
                  ["housing", 2000],
                  ["Transportaiton", 1000],
                  ["Food", 0],
                  ["gobble", 500],
                  ["Net Pay", 0],
                  ["housing", 2000],
                  ["Transportaiton", 1000],
                  ["Food", 0],
                  ["gobble", 500]
                ]
            }
            options={{
              title: "Types of Expense",
              // Just add this option
              is3D: true,
            }}
            rootProps={{ "data-testid": "2" }}
          />
        </section>
      </div>
    );
  }
}

// [
//   ["type", "amount"],
//   ["Net Pay", 0],
//   ["housing", 2000],
//   ["Transportaiton", 1000],
//   ["Food", 0]
// ]
