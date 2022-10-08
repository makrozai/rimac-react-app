import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material';
import { Routes, Route, Link } from "react-router-dom"
import { Dashboard, Login, Result } from './pages'
import { UserProvider } from './context/UserProvider';

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
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="result" element={<Result />} />
        </Routes>
      </UserProvider>
    </ThemeProvider>
  )
}

export default App
