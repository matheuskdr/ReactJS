"use client"

import { useEffect, useState } from "react";

const Page = () => {
  const [name, setName] = useState('Matheus');
  const [age, setAge] = useState(90);

  useEffect(() => {
    console.log('RODOU O EFFECT...')
  }, [name]);

  const handlePedroClick = () => {
    setName('Pedro');
  }

  return (
    <div className="">
      <p>Meu nome é: {name} e eu tenho {age} anos.</p>
      <hr />
      <button className="border border-blue-400 m-3 p-3" onClick={() => setName('Pedro')}>Mudar para pedro</button>
      <button className="border border-blue-400 m-3 p-3" onClick={() => setName('João')}>Mudar para João</button>
      <button className="border border-blue-400 m-3 p-3" onClick={() => setAge(10)}>Mudar para 10 anos</button>
      <button className="border border-blue-400 m-3 p-3" onClick={() => setAge(90)}>Mudar para 90 anos</button>
    </div>
  );
}

export default Page;