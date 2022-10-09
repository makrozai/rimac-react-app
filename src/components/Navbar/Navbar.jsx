import React from 'react'
import PropTypes from 'prop-types'
import Logo from '../../assets/logo_rimac.svg'
import { AppBar, Button, Toolbar, Typography, useMediaQuery, useTheme } from '@mui/material'
import Phone from '@mui/icons-material/Phone'

import './Navbar.css'

export const Navbar = ({ position = 'static' }) => {
  
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.up("md"))

  return (
    <AppBar position={ position } className={`navbar ${position === 'absolute' ? 'navbar--fixed' : ''}`}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <img src={ Logo } alt="" />
        </Typography>
        {
          matches ? (
            <>
              <Button color="inherit" className='navbar__test'>¿Tienes alguna duda?</Button>
              <Button color="inherit" className='navbar__phone'><Phone /> (01) 411 6001</Button>
            </>
          ) : (
            <Button color="inherit" className='navbar__phone'><Phone /> Llámanos</Button>
          )
        }
      </Toolbar>
    </AppBar>
  )
}

Navbar.propTypes = {
  position: PropTypes.string
}