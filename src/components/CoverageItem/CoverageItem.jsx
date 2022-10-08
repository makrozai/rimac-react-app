import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Accordion, AccordionDetails, AccordionSummary, Checkbox, Grid, IconButton, styled, Switch, Typography, useMediaQuery, useTheme } from '@mui/material'
import { IosSwitch } from '../IosSwitch/IosSwitch'

import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'
import DeleteIcon from '@mui/icons-material/Delete'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'

import './CoverageItem.css'

export const CoverageItem = ({ items, onCoverageSelected }) => {

  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.up("sm"))

  const formatValues = items.map(item => {
    return { id: item.id, price: item.price, addedState: false, openItem: false }
  })

  const [coverageValues, setCoverageValues] = useState(formatValues)

  const handleStateCoverage = (e, id) => {
    e.stopPropagation()

    const newValues = coverageValues.map((item) => {
      return {
        ...item,
        addedState: item.id === id ? !item.addedState : item.addedState
      }
    })
    
    setCoverageValues(newValues)
    onCoverageSelected(newValues)
  }
  
  const handleExpand = (e, id) => {
    const newValues = coverageValues.map((item) => {
      return {
        ...item,
        openItem: item.id === id ? !item.openItem : item.openItem
      }
    })
    
    setCoverageValues(newValues)
  }

  return (
    <div>
      {
        items.map(({ id, title, description, addedState, image }, index) => (
          <Accordion
            key={ id }
            className='coverage-item'
            square
            disableGutters
            onClick={ (e) => handleExpand(e, id) }
          >
            <AccordionSummary
              expandIcon={ matches && <ExpandMoreIcon color='secondary' /> }
              className='coverage-item__heading'
            >
              <Grid item xs={2} className='coverage-item__icon'>
                <img src={ image } alt="" />
              </Grid>
              <Grid item xs={10}>
                <div className={ `coverage-item__toggle ${ matches ? '':'coverage-item__toggle--mobile' }` }>
                  <Typography variant='h6'>{ title }</Typography>
                  {
                    matches ? (
                      <div
                        onClick={ e => handleStateCoverage(e, id) }
                      >
                        <IconButton color='primary'>
                          { coverageValues[index].addedState ?  <RemoveIcon /> : <AddIcon /> }
                        </IconButton>
                        <Typography
                          component='span'
                        >
                          {coverageValues[index].addedState ? 'quitar' : 'agregar'}
                        </Typography>
                      </div>
                    ) : (
                      <>
                        <IosSwitch
                          checked={ coverageValues[index].addedState }
                          color='success'
                          onClick={ e => handleStateCoverage(e, id) }
                          className='coverate-item__switch'
                        />
                        <div className="coverage-item__expand">
                          {
                            coverageValues[index].openItem ? (
                              <Typography variant='body2' className='disabled'>
                                Ver menos <KeyboardArrowUpIcon />
                              </Typography>
                            ) : (
                              <Typography variant='body2'>
                                ver más <KeyboardArrowDownIcon />
                              </Typography>
                            )
                          }
                        </div>  
                      </>
                    )
                  }
                </div>
              </Grid>
            </AccordionSummary>
            <AccordionDetails className='coverage-item__body'>
              <Grid container>
                <Grid item xs={2}></Grid>
                <Grid item xs={10}>
                  <Typography>
                    { description }
                  </Typography>
                </Grid>
              </Grid>
            </AccordionDetails>
          </Accordion>
        ))
      }
    </div>
  )
}

CoverageItem.propTypes = {}