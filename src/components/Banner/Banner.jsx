import React from 'react'
import PropTypes from 'prop-types'
import { Typography, useMediaQuery, useTheme } from '@mui/material'

import BannerDesktop from '../../assets/banner_desktop.svg'
import BannerMobile from '../../assets/banner_mobile.svg'
import BannerWallpaper from '../../assets/banner_wallpaper.svg'

import './Banner.css'

export const Banner = ({ tag, title, description }) => {

  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.up("md"))

  return (
    <div
      className={ `banner ${ matches ? '' : 'banner--mobile' }`}
      style={{ 
        backgroundImage: `url(${ matches && BannerWallpaper })` 
      }}
    >
      <div className='banner__container'>
        <img src={ matches ? BannerDesktop : BannerMobile } alt="" />
        <div>
          <Typography variant="subtitle1" gutterBottom component='p'>
            { tag }
          </Typography>
          <Typography variant="h3" gutterBottom>
            { title.text } <span>{ title.spotlight }</span>
          </Typography>
          <Typography variant="h6" gutterBottom>
            { description }
          </Typography>
        </div>
      </div>
      {
        matches && (
          <div className="banner__copy">
            <Typography>
              © 2021 RIMAC Seguros y Reaseguros.
            </Typography>
          </div>
        )
      }
    </div>
  )
}

Banner.propTypes = {
  tag: PropTypes.string.isRequired,
  title: PropTypes.object.isRequired,
  description: PropTypes.string.isRequired
}
