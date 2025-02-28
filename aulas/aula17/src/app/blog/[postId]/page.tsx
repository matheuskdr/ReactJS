import { Post } from "@/types/Post";
import { Metadata } from "next";

type Props = {
    params: {
        postId: string;
    }
}

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
    const postRequest = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`);
    const post: Post = await postRequest.json();

    return {
        title: post.title
    }
}

const Page = async ({ params }: Props) => {
    const postRequest = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`);
    const post: Post = await postRequest.json();

    if(!post.id) {
        return <div>Post not found</div>
    }

    return (
        <div className="text-center">
            <div>ID: {params.postId}</div>
            <h1 className="text-3xl uppercase my-3">{post.title}</h1>
            <p>{post.body}</p>
        </div>
    );
}

export default Page;