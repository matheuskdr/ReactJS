"use client"

import { Album } from "@/types/Album";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

const Page = () => {
    const [loading, setLoading] = useState(true);
    const [albums, setAlbums] = useState<Album[]>([]);

    useEffect(() => {
        handleGetPosts();
    }, []);

    const handleGetPosts = async () => {
        setLoading(true);

        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/albums');
            setAlbums(response.data);
        } catch (err) {
            alert("Algo deu errado!");
        }

        setLoading(false);
    }

    return (

        <div className="">
            <div>
                {loading && "Carregando..."}
                {!loading && albums.length > 0 &&
                    <ul>
                        {albums.map(item => (
                            <Link key={item.id} href={`/album/${item.id}`}>
                                <li
                                    key={item.id}
                                    className="border-2 p-2.5 m-2.5 hover:opacity-80 cursor-pointer"
                                >{item.title}</li>
                            </Link>
                        ))}
                    </ul>
                }

            </div>
        </div>
    );
}

export default Page;