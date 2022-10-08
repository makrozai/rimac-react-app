import { Button, Grid, Typography, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'
import { Navbar } from '../../components'

import bannerResult from '../../assets/banner_result.svg'
import bannerResultMobile from '../../assets/banner_result__mobile.svg'

import './Result.css'

export const Result = () => {

  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.up("md"))

  return (
    <Grid
      container
      spacing={0}
      className='result'
    >
      <Navbar />
      <Grid
        item
        xs={12}
        md={5}
      >
        <div className={ `result__banner ${ matches ? '': 'result__banner--mobile' }` }>
          {
            matches ? <img src={ bannerResult } alt="" /> : <img src={ bannerResultMobile } alt="" />
          }
        </div>
      </Grid>
      <Grid
        item
        sm={12}
        md={7}
      >
        <div className={ `result__body ${ matches ? '': 'result__body--mobile' }` }>
          <Typography variant='h2'>
            <span>¡Te damos la bienvenida!</span>
            Cuenta con nosotros para proteger tu vehículo
          </Typography>
          <Typography variant='h6'>
            Enviaremos la confirmación de compra de tu Plan Vehícular Tracking a tu correo:
            <span>joel.sanchez@gmail.com</span>
          </Typography>
          <Button
            variant="contained"
            size="large"
            className='result__submit'
            color='secondary'
          >
            cómo usar mi seguro
          </Button>
        </div>
      </Grid>
      {
        !matches && (
          <Grid
            item
            xs={12}
          >
            <div className="result__copy">
              <Typography variant='subtitle1'>
                © 2021 RIMAC Seguros y Reaseguros.
              </Typography>
            </div>
          </Grid>
        )
      }
    </Grid>
  )
}
