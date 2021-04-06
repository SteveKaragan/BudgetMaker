import React from 'react'

const DataContext = React.createContext({
  user: '',
  password: '',
  budget: [],
  types: [],
  handleNewUser: () => {},
  handleNewBudget: () => {}
})

export default DataContext