import React from 'react'
import { createTheme, ThemeProvider } from '@mui/material'
import { UserProvider } from './context/UserProvider'
import { Router } from './router/Router'

const theme = createTheme({
  palette: {
    primary: {
      main: '#6F7DFF'
    },
    secondary: {
      main: '#FF1C44'
    },
    success: {
      main: '#389E0D'
    }
  },
  typography: {
    fontFamily: [
      "Lato",
      "sans-serif"
    ].join(",")
  }
})

function App() {

  return (
    <ThemeProvider theme={theme}>
      <UserProvider className="App">
        <Router />
      </UserProvider>
    </ThemeProvider>
  )
}

export default App
