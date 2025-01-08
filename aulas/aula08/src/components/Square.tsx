import { useEffect } from "react";

export const Square = () => {
    useEffect(() => {
        window.addEventListener('scroll', () => { });

        return () => {
            window.removeEventListener('scroll', () => { });
        }
    });

    return (
        <div className="w-40 h-40 bg-red-400"></div>
    );
}