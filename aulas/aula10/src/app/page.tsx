"use client"

import { User } from "@/types/User";
import { useEffect, useRef, useState } from "react";

const Page = () => {
  const [legendInput, setLegendInput] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSend = async () => {
    if(fileInputRef.current?.files && fileInputRef.current.files.length > 0) {
      const fileItem = fileInputRef.current.files[0];
      const allowed = ['image/jpg', 'image/jpeg', 'image/png'];

      if(allowed.includes(fileItem.type)) {

        const data = new FormData();
        data.append('image', fileItem);
        data.append('legend', legendInput);

        const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
          method: 'POST',
          headers: {
            'Content-type': 'multipart/form-data'
          },
          body: data
        });
        const json = await res.json();
        console.log(json);

      } else {
        alert('Arquivo incompativel!')
      }

    } else {
      alert('Selecione um arquivo');
    }
  }

  return (
    <div className="container mx-auto">
      <h1 className="mt-4 text-3xl">Upload de Imagem</h1>

      <div className="max-w-md flex flex-col gap-3 border border-dotted border-white p-3 m-4 mt-4">
        <input
          ref={fileInputRef}
          type="file"
        />
        <input
          type="text"
          placeholder="Digite uma legenda"
          className="p-3 bg-white rounded-md text-black"
          value={legendInput}
          onChange={e => setLegendInput(e.target.value)}
        />
        <button onClick={handleFileSend}>Enviar Imagem</button>
      </div>
    </div>
  );
}

export default Page;