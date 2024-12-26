"use client"

import { FormEvent } from "react";
import { CustomButton } from "./components/CustomButton";

const Page = () => {

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Opa, mandando!")
  }

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <h1 className="text-3xl mb-3">Form de login</h1>
      <form onSubmit={handleFormSubmit}>
        <input type="text" />
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
}

export default Page;