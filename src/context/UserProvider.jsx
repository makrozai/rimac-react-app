import React, { useState } from 'react'
import { UserService } from '../services/UserServices'
import { baseRange, baseCoverageAmount } from '../static/dashboard'
import { UserContext } from './UserContext'

export const UserProvider = ({ children }) => {

  const [user, setUser] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [insured, setInsured] = useState(baseRange.min)
  const [coverageSubTotal, setCoverageSubTotal] = useState([])
  const [coverageTotal, setCoverageTotal] = useState(baseCoverageAmount)

  const authUser = async (typeDocument, document, phone, license, terms) => {
    setIsLoading(true)
    try {
      const formatDocument = document.split("")[document.length - 1]
      const userData = await UserService.getUser(formatDocument)
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

  const resetProfile = () => {
    setUser(null)
    setInsured(baseRange.min)
    setCoverageSubTotal([])
    setCoverageTotal(baseCoverageAmount)
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
          authUser,
          resetProfile
        }
      }
    >
      { children }
    </UserContext.Provider>
  )
}
