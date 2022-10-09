import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Grid, IconButton, Typography, useMediaQuery, useTheme } from '@mui/material'
import { CardUser, Navbar, StepperCotizer, InsuredCounter, Coverages, CoverageTotal } from '../../components'
import { UserContext } from '../../context/UserContext'

import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'

import { steps, coverageItems, baseRange } from '../../static/dashboard'

import './Dashboard.scss'

export const Dashboard = () => {

  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.up("md"))

  const { user, insured, changeInsured, processSubTotal, coverageTotal } = useContext(UserContext)
  const navigate = useNavigate()

  const firstName = user.name.split(' ')[0]
  
  const handleSubmit = () => {
    navigate('/result')
  }

  const handleBack = () => {
    navigate('/')
  }

  return (
    <Grid
      container
      spacing={0}
      className='dashboard'
    >
      <Navbar/>
      <Grid
        item
        sm={12}
        md={3}
        className='dashboard__navbar'
      >
        <StepperCotizer steps={ steps } selectStep={ 1 } />
      </Grid>
      <Grid
        item
        sm={12}
        md={6}
      >
        <div className={`dashboard__body ${ matches ? '':'dashboard__body--mobile' }`}>
          {
            matches && (
              <div className='dashboard__back' onClick={ handleBack }>
                <IconButton className='button'>
                  <ArrowBackIosNewIcon />
                </IconButton>
                <Typography variant='body2'>
                  VOLVER
                </Typography>
              </div>
            )
          }
          <main>
            <div className='dashboard__heading'>
              {
                matches ? (
                  <Typography variant='h3'>
                    ¡Hola, <span>{ firstName }!</span>
                  </Typography>
                ) : (
                  <Typography variant='h4'>
                    Mira las coberturas
                  </Typography>
                )
              }
              <Typography variant='h6'>
                Conoce las coberturas para tu plan
              </Typography>
            </div>

            <CardUser
              license={ user.license }
              name={ user.company.name }
            />
          </main>
          <div className={ matches ? '': 'dashboard__insured' }>
            <InsuredCounter
              min={ baseRange.min }
              max={ baseRange.max }
              defaultAmount={ insured }
              onChangeAmount={ changeInsured }
            />
          </div>

          <Coverages
            coverageItems={ coverageItems }
            onCoverageSelected={ processSubTotal }
            insuredAmount={ insured }
          />
        </div>
      </Grid>
      <Grid
        item
        sm={12}
        md={3}
        className='dashboard__amount'
      >
        <CoverageTotal amount={ coverageTotal } onSubmit={ handleSubmit } />
      </Grid>
    </Grid>
  )
}
