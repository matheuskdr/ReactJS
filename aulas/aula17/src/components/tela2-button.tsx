"use client"

import { useRouter } from "next/navigation";

export const Tela2Button = () => {
    const router = useRouter();

    const handleClick = () => {
        router.push('/tela2');
    }

    return (
        <button onClick={handleClick}>Ir para a tela 2</button>
    );
}