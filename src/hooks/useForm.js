import { useState } from 'react'

export const useForm = ( initialForm = {} ) => {
  
  const [ formState, setFormState ] = useState( initialForm );
  
  const [errors, setErrors] = useState({})

  const onInputChange = ({ target }) => {
    
    const { name, value } = target
    
    setFormState({
      ...formState,
      [ name ]: value
    })

    if (!!value && errors[name]) {
      validationForm({
        ...formState,
        [ name ]: value
      })
    }
  }

  const onResetForm = () => {
    setFormState( initialForm );
  }

  const validationForm = (formValue = formState) => {
    const stateValue = {}

    for (const key in formValue) {
      stateValue[key] = !!!formValue[key]
    }

    setErrors(stateValue)

    return Object.values(stateValue).find(value => value === false)
  }

  return {
    ...formState,
    formState,
    errors,
    onInputChange,
    onResetForm,
    validationForm
  }
}
