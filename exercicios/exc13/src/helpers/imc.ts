export type Level = {
    title: string;
    color: string;
    icon: 'down' | 'up';
    imc: number[];
    yourImc?: number;
}

export const levels: Level[] = [
    { title: 'Magreza', color: 'slate-400', icon: 'down', imc: [0, 18.5] },
    { title: 'Normal', color: 'emerald-400', icon: 'up', imc: [18.6, 24.9] },
    { title: 'Sobrepeso', color: 'amber-400', icon: 'down', imc: [25, 30] },
    { title: 'Obesidade', color: 'red-400', icon: 'down', imc: [30.1, 99] }
];

export const calculateImc = (height: number, weight: number) => {
    const imc = weight / (height * height);

    for(let i in levels) {
        if(imc >= levels[1].imc[0] && imc < levels[i].imc[1]) {
            let levelCopy: Level = {...levels[i]}
            levelCopy.yourImc = parseFloat(imc.toFixed(2));
            return levelCopy;
        }
    }

    return null;
}