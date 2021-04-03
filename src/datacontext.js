import React from 'react'

const DataContext = React.createContext({
  users: [],
  currentUser: '',
  handleNewUser: () => {},
  handleSetCurrentUser: () => {},
  handleNewBudget: () => {}
})

export default DataContext