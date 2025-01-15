import { PostActions, PostReducer } from "@/reducers/PostReducer";
import { Post } from "@/types/Post";
import { createContext, Dispatch, ReactNode, useReducer } from "react";

type PostContextType = {
    posts: Post[];
    dispatch: Dispatch<PostActions>;
}

export const PostContext = createContext<PostContextType | null>(null);

export const PostProvider = ({ children }: { children: ReactNode }) => {
    const [posts, dispatch] = useReducer(PostReducer, []);

    return (
        <PostContext.Provider value={ { posts, dispatch } }>{children}</PostContext.Provider>
    );
}