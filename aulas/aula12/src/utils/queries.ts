import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getPost, getPosts, getUsers } from "./api";
import { queryClient } from "./queryClient";

export const usePosts = () => {
    const query = useQuery({
        queryKey: ['posts'],
        queryFn: getPosts
    });
    return query;
}

export const usePost = (id: number) => useQuery({
    queryKey: ['posts', id],
    queryFn: () => getPost(id)
});

export const useUsers = () => {
    const query = useQuery({
        queryKey: ["posts"],
        queryFn: getUsers
    });
    return query;
}

export const useUsersPrefetch = async () => {
    const queryClient = useQueryClient();

    return queryClient.prefetchQuery({
        queryKey: ['users'],
        queryFn: getUsers
    });
}

export const invalidatePosts = () => {
    queryClient.invalidateQueries({
        queryKey: ['posts'],
        exact: true
    });
}

