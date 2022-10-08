import React, { useState } from 'react'
import { UserService } from '../services/UserServices'
import { UserContext } from './UserContext'

export const UserProvider = ({ children }) => {

  const [user, setUser] = useState({})
  const [isLoading, setIsLoading] = useState(false)

  const authUser = async (typeDocument, document, phone, license, terms) => {
    setIsLoading(true)
    try {
      const userData = await UserService.getUser(document)
      const userFormat = {
        ...userData,
        document,
        typeDocument,
        mobilePhone: phone,
        license
      }

      setUser(userFormat)
      setIsLoading(false)
      return userFormat

    } catch (error) {
      setIsLoading(false)
      console.log(error)
    }
  }

  return (
    <UserContext.Provider
      value={
        {
          user,
          isLoading,
          authUser
        }
      }
    >
      { children }
    </UserContext.Provider>
  )
}
