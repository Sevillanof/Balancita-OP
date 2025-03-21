import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import  {schema, LoginFormValues}  from "./schemas/login-form-schema";
import { Box, Typography } from "@mui/material";
import FormInput from "./FormInput";
import SubmitInput from "./SubmitButton";
import "./LoginForm.css";

function LoginForm() {
  
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isDirty, isValid },
    reset,
  } = useForm<LoginFormValues>({
    resolver: zodResolver(schema),
    mode: "onChange",
    defaultValues: {
      username: "",
      password: "",
    }
  })

  

  const userNameWatch = watch("username");
  const passwordWatch = watch("password");

  const onSubmit: SubmitHandler<LoginFormValues> = (data) => {
    console.log(data);
    reset();
  }
  
  return (
    <>

<FormProvider {...{register, errors}}>
    <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
      <FormInput name="username" label="Nombre de Usuario" type="text" required={true} />
      <FormInput name="password" label="Contraseña" type="password" required={true} />
      <SubmitInput isDirty={isDirty} isValid={isValid} type='submit'>Iniciar Sesion</SubmitInput>
    </form>
</FormProvider>
    <Box color="grey.600" mt="10px">
      {isDirty && !isValid && (
        <>
        <Typography>Username: {userNameWatch}</Typography>
        <Typography>Password: {passwordWatch}</Typography>
        </>
      )
    }
    </Box>
    </>
  )
}

export default LoginForm