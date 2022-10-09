import React from 'react'
import PropTypes from 'prop-types'
import { Button, Typography, useMediaQuery, useTheme } from '@mui/material'
import { formatCurrency } from '../../utils'

import CheckIcon from '@mui/icons-material/Check'

import './CoverageTotal.css'

export const CoverageTotal = ({ amount, onSubmit }) => {

  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.up("md"))

  return (
    <div className={ `coverage-total ${ matches ? '' : 'coverage-total--mobile' }` }>
      <div className="coverage-total__amount">
        <Typography variant='body2' component='span'>
          Monto
        </Typography>
        <Typography variant='h4'>
          { formatCurrency(amount) }
        </Typography>
        <Typography variant='subtitle2'>
          mensuales
        </Typography>
      </div>
      <div className="coverage-total__legend">
        <Typography variant='subtitle1' component='p'>
          El precio incluye:
        </Typography>
        <ul>
          <Typography variant='subtitle1' component='li'>
            <CheckIcon color="success" />
            Llanta de respuesto
          </Typography>
          <Typography variant='subtitle1' component='li'>
            <CheckIcon color="success" />
            Analisis de motor
          </Typography>
          <Typography variant='subtitle1' component='li'>
            <CheckIcon color="success" />
            Aros gratis
          </Typography>
        </ul>
      </div>
      <Button
        variant="contained"
        color="secondary"
        size="large"
        fullWidth
        onClick={ onSubmit }
      >
        lo quiero
      </Button>
    </div>
  )
}

CoverageTotal.propTypes = {
  amount: PropTypes.number.isRequired,
  onSubmit: PropTypes.func.isRequired
}