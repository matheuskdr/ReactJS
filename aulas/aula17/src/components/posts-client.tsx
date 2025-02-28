"use client"

import { getPosts } from "@/actions/get-posts";
import { Post } from "@/types/Post";
import { useEffect, useState } from "react";

export const PostsClient = () => {
    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState<Post[]>([]);

    const loadPosts = async () => {
        setLoading(true);
        
        const data = await getPosts();

        setPosts(data);
        setLoading(false);
    }

    return (
        <>
        <button onClick={loadPosts}>Carregar Posts</button>
            <ul>
                {posts.map(item => (
                    <li key={item.id}>{item.title}</li>
                ))}
            </ul>
        </>
    );
}