import { usePosts } from "@/contexts/PostContext";

export const Footer = () => {
    const postCtx = usePosts();

    return (
        <footer>
            Total de POSTS: {postCtx?.posts.length}
        </footer>
    );
}