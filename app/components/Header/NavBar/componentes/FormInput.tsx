import { TextField, Typography } from '@mui/material';

import { FieldErrors, useFormContext } from 'react-hook-form';

interface FormInputProps {
    name: string;
    label: string;
    type: string;
    disabled?: boolean;
    required?: boolean;
}



const formValidation = (errors: FieldErrors, errorKey: string ) => {
  const error = errors[errorKey]
    return error ? <Typography color="red">{error.message as string}</Typography> : null
}

function FormInput({name, label, type, disabled, required}: FormInputProps) {
    const {register, errors } = useFormContext();
  return (
    <div>
        <TextField 
        required={required} 
        disabled={disabled} 
        type={type} 
        error={!!errors[name]}
        id={name}
        label={label}
        variant='outlined' 
        className= {'color= red'}
        {...register(name)}
        />
        {errors && formValidation(errors, name)}
    </div>
  )
}

export default FormInput