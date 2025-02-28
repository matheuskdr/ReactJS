import { receberDados } from "@/actions/receber-dados";
import { Form } from "@/components/form";
import { Posts } from "@/components/posts";
import { PostsClient } from "@/components/posts-client";
import Link from "next/link";

const Page = () => {

  return (
    <div>
      <h1>Página inical</h1>

     <Posts />

      <Link href={'/tela1'}>Ir para a tela 1</Link>
    </div>
  );
}

export default Page;