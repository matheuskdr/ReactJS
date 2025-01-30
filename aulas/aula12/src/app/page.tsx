"use client"

import { useAddPost } from "@/utils/mutations";
import { usePosts } from "@/utils/queries";

const Page = () => {
  const posts = usePosts();
  const addPost = useAddPost();

  const handleAddButton = async () => {
    const data = {
      title: 'Teste',
      body: 'Corpo de teste',
      userId: 7
    };

    addPost.mutate(data);
  }

  return (
    <div className="container mx-auto">
      <h1 className="text-white text-3xl">Opa, tudo bem?</h1>

      <div className="border border-white p-3 my-3">
        <p>Adicionar Novo Post</p>

        <p onClick={() => addPost.reset()}>Status: {addPost.status}</p>

        <button onClick={handleAddButton}>Adicionar</button>
      </div>

      {posts.isInitialLoading && 'Carregando...'}

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