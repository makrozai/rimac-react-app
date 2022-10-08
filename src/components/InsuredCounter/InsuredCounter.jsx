import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { IconButton, Typography, useMediaQuery, useTheme } from '@mui/material'
import { formatCurrency } from '../../utils'

import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'

import './InsuredCounter.css'

const defaultAlterate= 100

export const InsuredCounter = ({ min, max, defaultAmount, onChangeAmount }) => {

  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.up("md"))

  const [amount, setAmount] = useState(defaultAmount)

  const handleIncrement = () => {
    setAmount(amount + defaultAlterate)
    onChangeAmount(amount + defaultAlterate)
  }

  const handleDecrement = () => {
    setAmount(amount - defaultAlterate) 
    onChangeAmount(amount - defaultAlterate)
  }

  return (
    <div className={ `insured-counter ${ matches ? '': 'insured-counter--mobile' }` }>
      <div className='insured-counter__legend'>
        <Typography variant='h6'>
          Indica la suma asegurada
        </Typography>
        <Typography variant='body1'>
          MIN { formatCurrency(min, 0) }
        </Typography>
        <Typography variant='body1' component="span">
          |
        </Typography>
        <Typography variant='body1'>
          MAX { formatCurrency(max, 0) }
        </Typography>
      </div>
      <div className='insured-counter__counter'>
        <IconButton color='primary' onClick={ handleDecrement } disabled={ !(amount > min) }>
          <RemoveIcon />
        </IconButton>
        <Typography variant='h6'>
          { formatCurrency(amount, 0) }
        </Typography>
        <IconButton color='primary' onClick={ handleIncrement } disabled={ !(amount < max) }>
          <AddIcon />
        </IconButton>
      </div>
    </div>
  )
}

InsuredCounter.propTypes = {}