import React from 'react'
import { Navigate } from 'react-router-dom'

export const ProptectedRoute = ({ user, children }) => {
  if (!user) {
    return <Navigate to="/" replace />
  }

  return children
}
