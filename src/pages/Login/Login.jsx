import React from 'react'
import { Grid } from '@mui/material'
import { Banner, LoginForm, Navbar } from '../../components'

import './Login.scss'

export const Login = () => {

  return (
    <Grid
      container
      spacing={0}
      className="login"
    >
      <Navbar position='absolute'/>
      <Grid
        item
        xs={12}
        md={5}
        className="login__banner"
      >
        <Banner 
          tag='¡NUEVO!' 
          title={ { text: 'Seguro',  spotlight: 'Vehicular Tracking' } } 
          description='Cuentanos donde le haras seguimiento a tu seguro'
        ></Banner>
      </Grid>
      <Grid
        item
        xs={12}
        md={7}
      >
        <LoginForm />
      </Grid>
    </Grid>
  )
}
