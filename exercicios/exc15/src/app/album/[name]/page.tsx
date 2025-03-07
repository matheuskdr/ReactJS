"use client"

import { Album, Photo } from "@/types/Album";
import axios from "axios";
import { useParams } from "next/navigation";
import { use, useEffect, useState } from "react";
import * as React from 'react'

type Props = {
    params: {
        name: string;
    };
};

export const Page = ({ params }: Props) => {
    const name = useParams();
    const [loading, setLoading] = useState(true);
    const [album, setAlbum] = useState<Photo[]>([]);
    
    console.log(name)
    useEffect(() => {
        handleGetAlbum();
    }, []);

    const handleGetAlbum = async () => {
        setLoading(true);

        try {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/albums/${params.name}/photos`);
            setAlbum(response.data);
        } catch (err) {
            alert("Algo deu errado!");
        }

        setLoading(false);
    }

    return (
        <div>
            <button onClick={handleGetAlbum}>Click</button>
            {album.map((item) => (
                <div key={item.id}>{item.thumbnailUrl}</div>
            ))}
            
        </div>
    );
}

export default Page;