import { PostActions, PostReducer } from "@/reducers/PostReducer";
import { Post } from "@/types/Post";
import { createContext, Dispatch, ReactNode, useContext, useEffect, useReducer } from "react";

const STORAGE_KEY = 'postsContextContent';

type PostContextType = {
    posts: Post[];
    dispatch: Dispatch<PostActions>;
}

export const PostContext = createContext<PostContextType | null>(null);

export const PostProvider = ({ children }: { children: ReactNode }) => {
    const [posts, dispatch] = useReducer(
        PostReducer,
        JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
    );

    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(posts));
    }, [posts]);

    return (
        <PostContext.Provider value={ { posts, dispatch } }>{children}</PostContext.Provider>
    );
}

export const usePosts = () => useContext(PostContext);