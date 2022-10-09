import React from 'react'
import PropTypes from 'prop-types'
import { IconButton, LinearProgress, Step, StepLabel, Stepper, Typography, useMediaQuery, useTheme } from '@mui/material'

import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'

import './StepperCotizer.css'
import { useNavigate } from 'react-router-dom'

export const StepperCotizer = ({ steps, selectStep }) => {

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  const navigate = useNavigate()

  const handleBack = () => {
    navigate('/')
  }

  return (
    <>
      { matches ? (
        <Stepper
          nonLinear
          activeStep={ selectStep }
          orientation="vertical"
          className='stepper-cotizer'
        >
          {
            steps.map((label) => (

              <Step key={ label }>
                <StepLabel >{ label }</StepLabel>
              </Step>

            ))
          }
        </Stepper>
      ): (
        <div className="stepper-cotizer stepper-cotizer--mobile">
          <IconButton className='button' onClick={ handleBack }>
            <ArrowBackIosNewIcon />
          </IconButton>
          <Typography variant='body2'>
            Paso { selectStep + 1 } de { steps.length }
          </Typography>
          <LinearProgress variant="determinate" value={ 100 } style={{height: 7, borderRadius: 10 }} />
        </div>
      )}
    </>
  )
}

StepperCotizer.propTypes = {
  selectStep: PropTypes.number.isRequired
}