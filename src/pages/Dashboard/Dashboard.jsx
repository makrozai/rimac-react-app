import React, { useState } from 'react'
import { Grid, IconButton, Typography, useMediaQuery, useTheme } from '@mui/material'
import { CardUser, Navbar, StepperCotizer, InsuredCounter, Coverages, CoverageTotal } from '../../components'

import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'

import iconPerdidatotal from '../../assets/icon_perdidatotal.svg'
import iconDamage from '../../assets/icon_damage.svg'
import iconTheft from '../../assets/icon_theft.svg'

import './Dashboard.css'

const steps = ['Datos', 'Arma tu plan']

const coverageItems = [
  {
    id: 10,
    title: 'Llanta robada',
    description: 'He salido de casa a las cuatro menos cinco para ir a la academia de ingles de mi pueblo (Sant Cugat, al lado de Barcelona) con mi bici, na llego a la academia que está en el centro del pueblo en una plaza medio-grande y dejo donde siempre la bici atada con una pitón a un sitio de esos de poner las bicis y mucho más',
    image: iconTheft,
    price: 15
  },
  {
    id: 2,
    title: 'Choque y/o pasarte la luz roja',
    description: 'He salido de casa a las cuatro menos cinco para ir a la academia de ingles de mi pueblo (Sant Cugat, al lado de Barcelona) con mi bici, na llego a la academia que está en el centro del pueblo en una plaza medio-grande y dejo donde siempre la bici atada con una pitón a un sitio de esos de poner las bicis y mucho más',
    image: iconDamage,
    price: 20
  },
  {
    id: 3,
    title: 'Atropello en la vía Evitamiento',
    description: 'He salido de casa a las cuatro menos cinco para ir a la academia de ingles de mi pueblo (Sant Cugat, al lado de Barcelona) con mi bici, na llego a la academia que está en el centro del pueblo en una plaza medio-grande y dejo donde siempre la bici atada con una pitón a un sitio de esos de poner las bicis y mucho más',
    image: iconPerdidatotal,
    price: 50
  }
]

const baseCoverageAmount = 20
const baseRange = {
  min: 12500,
  max: 16500,
}

export const Dashboard = () => {

  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.up("md"))

  const [coverageAmount, setCoverageAmount] = useState(baseCoverageAmount)
  const [insuredValue, setInsuredValue] = useState(baseRange.min)

  const handleCoverage = (coverages) => {

    const subTotal = coverages.map(item => {
      return item.addedState ? item.price : 0
    }).reduce((prev, curr) => prev + curr, 0);

    setCoverageAmount(subTotal + baseCoverageAmount)
  }

  const handleChangeInsured = (amount) => {
    setInsuredValue(amount)
  }
  
  const handleSubmit = () => {
    console.log({ insuredValue, coverageAmount })
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
              <div className='dashboard__back'>
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
                    ¡Hola, <span>Juan!</span>
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
              license='C2U-114'
              name='Wolkswagen 2019 Golf'
            />
          </main>
          <div className={ matches ? '': 'dashboard__insured' }>
            <InsuredCounter
              min={ baseRange.min }
              max={ baseRange.max }
              defaultAmount={ insuredValue }
              onChangeAmount={ handleChangeInsured }
            />
          </div>

          <Coverages
            coverageItems={ coverageItems }
            onCoverageSelected={ handleCoverage }
          />
        </div>
      </Grid>
      <Grid
        item
        sm={12}
        md={3}
        className='dashboard__amount'
      >
        <CoverageTotal amount={ coverageAmount } onSubmit={ handleSubmit } />
      </Grid>
    </Grid>
  )
}
