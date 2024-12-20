const DateNow = () => {

    const hours = () => new Date().getHours();
    const minutes = () => new Date().getMinutes();

    if (hours() >= 18 ) {
        return (
            <>
                <h1 className="text-7xl mt-80">{hours()}:{minutes()}</h1>
                <h3 className="text-3xl">Boa noite!</h3>
            </>
        );
    } else if (hours() >= 0o6) {
        return (
            <>
                <h1 className="text-7xl mt-80">{hours()}:{minutes()}</h1>
                <h3 className="text-3xl">Bom dia!</h3>
            </>
        );
    } else {
        return (
            <>
                <h1 className="text-7xl mt-80">{hours()}:{minutes()}</h1>
                <h3 className="text-3xl">Boa tarde!</h3>
            </>
        )
        
    }
    
}

export default DateNow;