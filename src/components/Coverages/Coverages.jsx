import React from 'react'
import PropTypes from 'prop-types'
import { Box, Tab, Tabs, Typography, useMediaQuery, useTheme } from '@mui/material'
import { TabPanel, CoverageItem } from '../'

import './Coverages.css'

export const Coverages = ({ coverageItems, onCoverageSelected }) => {

  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.up("md"))

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={ `coverages ${ matches ? '': 'coverages--mobile' }` }>
      <Typography variant='h5'>
        Agrega o quita coberturas
      </Typography>

      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="secondary"
          indicatorColor="secondary"
          variant="fullWidth"
          className='coverages__tabs'
        >
          <Tab label="Protege a tu auto"/>
          <Tab label="Protege a los que te rodean"  />
          <Tab label="mejora tu plAn"  />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <CoverageItem items={ coverageItems } onCoverageSelected={ onCoverageSelected } />
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
    </div>
  )
}

Coverages.propTypes = {}