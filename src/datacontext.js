import React from 'react'

const DataContext = React.createContext({
  users: [],
  handleNewUser: () => {},
})

export default DataContext