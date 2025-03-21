import { Button } from '@mui/material';

function SubmitButton({isDirty, isValid, children, type}) {
  return (
    <Button type={type} variant='contained' disabled={!isDirty || !isValid}>
        {children}
    </Button>
  )
}

export default SubmitButton