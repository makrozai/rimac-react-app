import React, { useState } from 'react'
import { UserContext } from './UserContext'

export const UserProvider = ({ children }) => {

  const [user, setUser] = useState({
    name: '',
    typeDocument: '',
    numberDocument: null,
    numberPhone: null,
    license: ''
  })

  return (
    <UserContext.Provider value={{ hola:'mundo' }}>
      { children }
    </UserContext.Provider>
  )
}
