import React, { useContext, useState } from 'react'
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, Typography, useMediaQuery, useTheme } from '@mui/material'
import { UserContext } from '../../context/UserContext'
import { useNavigate } from 'react-router-dom'
import { Navbar } from '../../components'

import bannerResult from '../../assets/banner_result.svg'
import bannerResultMobile from '../../assets/banner_result__mobile.svg'

import './Result.scss'
import { formatCurrency } from '../../utils'

export const Result = () => {

  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.up("md"))

  const { user, insured, coverageSubTotal, coverageTotal, resetProfile } = useContext(UserContext)
  const [dialog, setDialog] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = () => {
    setDialog(true)
  }

  const handleClose = () => {
    setDialog(false)
    resetProfile()
    navigate('/')
  }
  
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
          <img src={ matches ? bannerResult : bannerResultMobile } alt="" />
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
            <span>{ user.email.toLowerCase() }</span>
          </Typography>
          <Button
            variant="contained"
            size="large"
            className='result__submit'
            color='secondary'
            onClick={ handleSubmit }
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
      <Dialog
        open={ dialog }
        onClose={ () => setDialog(false) }
      >
        <DialogTitle>Informacion de cotizacion</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Nombre: { user.name }
          </DialogContentText>
          <DialogContentText>
            Email: { user.email }
          </DialogContentText>
          <DialogContentText>
            Celular: { user.mobilePhone }
          </DialogContentText>
          <DialogContentText>
            Placa: { user.license }
          </DialogContentText>
          <DialogContentText>
            { user.typeDocument }: { user.document }
          </DialogContentText>
          <DialogContentText>
            Pago mensual: { formatCurrency(coverageTotal) }
          </DialogContentText>
          <DialogContentText>
            Suma asegurada: { formatCurrency(insured, 0) }
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={ handleClose }
            color='secondary'
          >
            Hacer otra Cotizacion
          </Button>
        </DialogActions>
      </Dialog>
    </Grid>
  )
}
