import React from 'react'
import PropTypes from 'prop-types'
import { Button, Checkbox, FormControl, FormControlLabel, FormGroup, MenuItem, Select, TextField, Typography, useMediaQuery, useTheme } from '@mui/material'
import { useForm } from '../../hooks/useForm'
import './LoginForm.css'

export const LoginForm = ({ }) => {
  
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.up("md"))

  const { typeDocument, numberDocuemnt, phone, license, onInputChange, onResetForm } = useForm({
    typeDocument: 'DNI',
    numberDocuemnt: '',
    phone: '',
    license: ''
  })

  return (
    <div className={ `login-form ${ matches ? '' : 'login-form--mobile' }` }>
      <Typography variant="h4" gutterBottom className='login-form__title'>
        Déjanos tus datos
      </Typography>

      <FormControl>
        <FormGroup className='login-form__group login-form__group--document'>
          <Select
            name='typeDocument'
            value={ typeDocument }
            onChange={ onInputChange }
            displayEmpty
            inputProps={{ 'aria-label': 'Without label' }}
            className='select'
          >
            <MenuItem value={'DNI'}>DNI</MenuItem>
            <MenuItem value={'RUC'}>RUC</MenuItem>
          </Select>
          <TextField
            name='numberDocuemnt'
            value={ numberDocuemnt }
            onChange={ onInputChange }
            placeholder="Nro. de doc"
            className='input'
          />
        </FormGroup>

        <FormGroup className='login-form__group'>
          <TextField
            name='phone'
            value={ phone }
            onChange={ onInputChange }
            placeholder="Celular"
          />
        </FormGroup>

        <FormGroup className='login-form__group'>
          <TextField
            name='license'
            value={ license }
            onChange={ onInputChange }
            placeholder="Placa"
          />
        </FormGroup>

        <FormGroup className='login-form__group login-form__group--checkbox'>
          <FormControlLabel
            control={<Checkbox defaultChecked color="success" />}
            label="Acepto la Política de Protecciòn de Datos Personales y los Términos y Condiciones."
          />
        </FormGroup>

        <div>
          <Button
            variant="contained"
            size="large"
            className='login-form__submit'
            color='secondary'
          >
            COTÍZALO
          </Button>
        </div>
      </FormControl>
    </div>
  )
}

LoginForm.propTypes = {}