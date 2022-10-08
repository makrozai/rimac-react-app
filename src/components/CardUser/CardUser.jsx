import React from 'react'
import PropTypes from 'prop-types'
import { Typography, useMediaQuery, useTheme } from '@mui/material'
import avatar from '../../assets/user.svg'
import './CardUser.css'

export const CardUser = ({ license, name }) => {

  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.up("sm"))

  return (
    <div className={ `card-user ${ matches ? '': 'card-user--mobile' }` }>
      <div className="card-user__data">
        <Typography variant="body1">
          Placa: { license }
        </Typography>
        <Typography variant="h5">
          { name }
        </Typography>
      </div>
      <div className="card-user__image">
        <img src={ avatar } alt="" />
      </div>
    </div>
  )
}

CardUser.propTypes = {
  license: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
}