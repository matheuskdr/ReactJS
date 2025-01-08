"use client"

import { listReducer } from "@/reducers/listReducer";
import { Item } from "@/types/Item";
import { useReducer, useState } from "react";

const Page = () => {
  const [list, dispatch] = useReducer(listReducer, []);

  const handleAddClick = () => {
    dispatch({
      type: 'add',
      payload: {
        text: 'Novo Item'
      }
    });
  }

  dispatch({
    type: 'remove',
    payload: { id: 2 }
  });

  dispatch({
    type: 'editText',
    payload: { id: 2, newText: 'bla bla bla' }
  });

  return (
    <div className="">
      <button onClick={handleAddClick}>Adicionar</button>
    </div>
  );
}

export default Page;