import React, { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import { UserContext } from '../context/UserContext'
import { Dashboard, Login, Result } from '../pages'

import { ProptectedRoute } from './ProptectedRoute'

export const Router = () => {

  const { user } = useContext(UserContext)

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="dashboard" element={ <ProptectedRoute user={ user } ><Dashboard /></ProptectedRoute> } />
      <Route path="result" element={ <ProptectedRoute user={ user } ><Result /></ProptectedRoute>} />
    </Routes>
  )
}
