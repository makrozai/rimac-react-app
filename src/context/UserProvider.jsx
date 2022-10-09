import React, { useState } from 'react'
import { UserService } from '../services/UserServices'
import { UserContext } from './UserContext'

const baseCoverageAmount = 20

export const UserProvider = ({ children }) => {

  const [user, setUser] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [insured, setInsured] = useState(16000)
  const [coverageSubTotal, setCoverageSubTotal] = useState([])
  const [coverageTotal, setCoverageTotal] = useState(baseCoverageAmount)

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
      console.error(error)
    }
  }
  
  const processSubTotal = (coverages, insuredValue = insured) => {
    
    setCoverageSubTotal(coverages)

    const subTotal = coverages.map(item => {
      return (item.addedState && insuredValue <= item.rules.max) ? item.price : 0
    }).reduce((prev, curr) => prev + curr, 0);

    setCoverageTotal(subTotal + baseCoverageAmount)
  }

  const changeInsured = (amount) => {
    setInsured(amount)
    coverageSubTotal.length > 1 && processSubTotal(coverageSubTotal, amount)
  }

  return (
    <UserContext.Provider
      value={
        {
          user,
          isLoading,
          insured,
          coverageSubTotal,
          coverageTotal,
          processSubTotal,
          changeInsured,
          authUser
        }
      }
    >
      { children }
    </UserContext.Provider>
  )
}
