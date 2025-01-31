"use client"

import { SingUpForm } from "@/types/SingUpForm";
import { Input } from "@mui/material";
import { Controller, SubmitHandler, useForm } from "react-hook-form";

const Page = () => {
  const {
    control,
    handleSubmit
  } = useForm<SingUpForm>();

  const handleFormSubmit: SubmitHandler<SingUpForm> = (data) => {
    console.log(data);
  }

  return (
    <div className="container mx-auto">
      
      <form onSubmit={handleSubmit(handleFormSubmit)}>

        <Controller
          control={control}
          name="name"
          rules={{ required: true, minLength: 2, maxLength: 20 }}
          render={( {field, fieldState} ) =>
            <Input
            {...field}
            error={fieldState.invalid}
            style={{ backgroundColor: '#FFF' }}
          />}
        />

        <Controller
          control={control}
          name="lastName"
          render={( {field, fieldState} ) =>
            <Input
            {...field}
            error={fieldState.invalid}
            style={{ backgroundColor: '#FFF' }}
          />}
        />

        <Controller
          control={control}
          name="age"
          rules={{ required: true, min: 18 }}
          render={( {field, fieldState} ) =>
            <Input
            {...field}
            error={fieldState.invalid}
            style={{ backgroundColor: '#FFF' }}
          />}
        />



        <input type="submit" value='Enviar' />

      </form>

    </div>
  );
}

export default Page;