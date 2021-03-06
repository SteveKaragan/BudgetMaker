import React from "react";

const DataContext = React.createContext({
  user: "",
  password: "",
  budget: [],
  types: [],
  handleNewUser: () => {},
  handleNewBudget: () => {},
  handleUpdateAccountValue: () => {},
  handleTypeVisibility: () => {},
  handleUpdateBudget: () => {},
});

export default DataContext;
