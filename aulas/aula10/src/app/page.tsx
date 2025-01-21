"use client"

import { useEffect } from "react";

const Page = () => {

  useEffect(() => {

    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(json => {
        console.log(json[0]);
      })
  }, []);

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl">Lista de usuários</h1>
    </div>
  );
}

export default Page;