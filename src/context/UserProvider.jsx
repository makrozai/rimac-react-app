import React, { useState } from 'react'
import { UserContext } from './UserContext'

export const UserProvider = ({ children }) => {

  const [user, setUser] = useState({
    name: '',
    typeDocument: '',
    document: null,
    phone: null,
    license: ''
  })

  const authUser = (typeDocument, document, phone, license, terms) => {
    console.log({ typeDocument, document, phone, license, terms })
  }

  return (
    <UserContext.Provider
      value={
        {
          user,
          authUser
        }
      }
    >
      { children }
    </UserContext.Provider>
  )
}
