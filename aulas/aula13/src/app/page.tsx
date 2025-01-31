"use client"

import { Form, useForm } from "react-hook-form";

const Page = () => {
  const { register, control } = useForm();

  const handleSucces = () => {
    alert('Deu tudo certo!!');
  }

  const handleError = () => {
    alert('Deu erro!!');
  }

  return (
    <div className="container mx-auto">

    <Form
      control={control}
      action={'https://jsonplaceholder.typicode.com/posts'}
      onSuccess={handleSucces}
      onError={handleError}
    >
      <input {...register('title', { required: true })} className="mr-3 border border-white p-3 text-black" />
      <input {...register('body', { required: true })} className="mr-3 border border-white p-3 text-black" />
      <input {...register('userId', { required: true })} className="border border-white p-3 text-black" />

      <button>Enviar</button>
    </Form>

    </div>
  );
}

export default Page;