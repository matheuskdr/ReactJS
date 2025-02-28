"use client"

type Props = {
    error: Error & { digest?: string },
    reset: () => void;
}

export default function Error({ error, reset }: Props) {

    const handleTryAgain = () => {
        reset();
    }

    return (
        <div>
            <h2>Aconteceu algum erro</h2>
            <button onClick={handleTryAgain}>Tentar novamente</button>
        </div>
    );
}