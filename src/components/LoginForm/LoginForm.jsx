import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'
import { Button, Checkbox, CircularProgress, FormControl, FormControlLabel, FormGroup, MenuItem, Select, TextField, Typography, useMediaQuery, useTheme } from '@mui/material'
import { useForm } from '../../hooks/useForm'
import { UserContext } from '../../context/UserContext'

import './LoginForm.css'

export const LoginForm = () => {
  
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.up("md"))

  const { isLoading, authUser } = useContext(UserContext)
  const navigate = useNavigate()

  const { typeDocument, document, phone, license, terms, errors, onInputChange, validationForm } = useForm({
    typeDocument: 'DNI',
    document: '',
    phone: '',
    license: '',
    terms: false
  })
  
  const handleSubmit = async () => {
    if (!validationForm()) {
      const user = await authUser(typeDocument, document, phone, license, terms)
      
      user && navigate('/dashboard')
    }
  }

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
            error={ errors.document }
          >
            <MenuItem value={'DNI'}>DNI</MenuItem>
            <MenuItem value={'RUC'}>RUC</MenuItem>
          </Select>
          <TextField
            required
            name='document'
            value={ document }
            onChange={ onInputChange }
            placeholder="Nro. de doc"
            className='input'
            type='number'
            error={ errors.document }
          />
        </FormGroup>

        <FormGroup className='login-form__group'>
          <TextField
            required
            name='phone'
            value={ phone }
            onChange={ onInputChange }
            placeholder="Celular"
            type='number'
            error={ errors.phone }
          />
        </FormGroup>

        <FormGroup className='login-form__group'>
          <TextField
            required
            name='license'
            value={ license }
            onChange={ onInputChange }
            placeholder="Placa"
            type='text'
            error={ errors.license }
          />
        </FormGroup>

        <FormGroup className='login-form__group login-form__group--checkbox'>
          <FormControlLabel
            control={<Checkbox required checked={ terms } onClick={ () => onInputChange({ target: { value: !terms, name: 'terms' } }) } color="success" />}
            label="Acepto la Política de Protecciòn de Datos Personales y los Términos y Condiciones."
          />
          {
            errors.terms && (
              <Typography variant='body2' component='span' className='error'>
                Es necesario aceptar la Política de Protecciòn
              </Typography>
            )
          }
        </FormGroup>
        <div>
          {
            isLoading ? (
              <Button
                variant="contained"
                disabled
                size="large"
                className='login-form__submit'
              >
                <CircularProgress size={14} />
              </Button>
            ) : (
              <Button
                variant="contained"
                size="large"
                className='login-form__submit'
                color='secondary'
                onClick={ (e) => handleSubmit() }
              >
                COTÍZALO
              </Button>
            )
          }
        </div>
      </FormControl>
    </div>
  )
}