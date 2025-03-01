"use client"

import { GridItem } from "@/components/gridItem/GridItem";
import { calculateImc, Level, levels } from "@/helpers/imc";
import { useState } from "react";

const Page = () => {
  const [heightField, setHeightField] = useState<number>(0);
  const [weightField, setWeightField] = useState<number>(0);
  const [toShow, setToShow] = useState<Level | null>(null);

  const handleCalculaleButton = () => {
    if (heightField && weightField) {
      setToShow(calculateImc(heightField, weightField));
    } else {
      alert('Digite todos os campos');
    }
  }

  const handleBackButton = () => {
    setToShow(null);
    setHeightField(0);
    setWeightField(0);

  }

  return (
    <div className="pb-12">
      <header className="max-w-4xl my-10 mx-auto max-md:px-5">
        <div className="">
          <img src="/assets/powered.png" alt="powered" width={150} />
        </div>
      </header>

      <div className="flex max-w-4xl m-auto max-md:px-5 max-md:flex-col">
        <div className="flex-1 mr-10 max-md:mr-0">
          <h1 className="m-0 text-5xl text-gray-700">Calcule o seu IMC.</h1>
          <p className="text-base my-10 text-gray-500">IMC é a silga para índice de Massa Corpórea, parâmetro adotado pela Organização Mundial de Saúde para calcular o peso ideal de cada pessoa.</p>

          <input
            className="w-full border-b-2 border-gray-500 py-2.5 px-0.5 mb-5 text-sm outline-0 disabled:opacity-50"
            type="number"
            placeholder="Digite a sua altura. Ex: 1.75 (em métros)"
            value={heightField > 0 ? heightField : ''}
            onChange={e => setHeightField(parseFloat(e.target.value))}
            disabled={toShow ? true : false}
          />
          <input
            className="w-full border-b-2 border-gray-500 py-2.5 px-0.5 mb-5 text-sm outline-0 disabled:opacity-50"
            type="number"
            placeholder="Digite o seu Peso. Ex: 75.5 (em kg)"
            value={weightField > 0 ? weightField : ''}
            onChange={e => setWeightField(parseFloat(e.target.value))}
            disabled={toShow ? true : false}
          />

          <button
            className="bg-sky-800 text-white text-sm rounded-xl py-4 w-full cursor-pointer mt-10 hover:bg-sky-900 duration-300 disabled:opacity-50"
            onClick={handleCalculaleButton}
            disabled={toShow ? true : false}
          >Calcular</button>
        </div>

        <div className="flex flex-1 ml-10 max-md:ml-0 max-md:mt-12">
          {!toShow &&
            <div className="flex-1 grid grid-cols-2 gap-5 max-sm:grid-cols-1">
              {levels.map((item, key) => (
                <GridItem key={key} item={item} />
              ))}
            </div>
          }
          {toShow &&
            <div className="flex-1 flex">
              <div
                onClick={handleBackButton}
                className="absolute bg-sky-700 size-16 rounded-full flex justify-center items-center cursor-pointer ml-[-35px] mt-[145px] hover:bg-sky-900 duration-300 max-md:ml-0 max-md:mt-0 max-md:rounded-2xl">
                <img src="/assets/leftarrow.png" alt="" width={25} />
              </div>
              <GridItem item={toShow} />
            </div>
          }
        </div>
      </div>
    </div>
  );
}

export default Page;