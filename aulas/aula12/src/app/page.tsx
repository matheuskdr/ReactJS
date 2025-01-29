"use client"

import { usePost, usePosts } from "@/utils/queries";
import { useState } from "react";

const Page = () => {
  const limit = 3;
  const [page, setPage] = useState(0);

  const posts = usePosts(limit, page * limit);

  const handlePrevButton = () => {
    setPage(page === 0 ? 0 : page -1);
  }

  const handleNextButton = () => {
    setPage(page + 1);
  }

  return (
    <div className="container mx-auto">
      <h1 className="text-white text-3xl">Opa, tudo bem?</h1>

      <div className="border border-white p-3 m-3">
        <div>Itens por pagina: {limit}</div>
        <div>Número da página: {page}</div>
        <button onClick={handlePrevButton} className="border mx-2 px-2">Página anterior</button>
        <button onClick={handleNextButton} className="border mx-2 px-2">Próxima Página</button>
      </div>

      {posts.isInitialLoading && 'Carregando...'}

      {!posts.isLoading && posts.isFetching && 'está recarregando..'}

      {posts.data &&
        <ul>
          {posts.data.map(item => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      }
    </div>
  );
}

export default Page;