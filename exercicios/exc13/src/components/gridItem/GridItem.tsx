import { Level } from "@/helpers/imc";

type Props = {
    item: Level
};

const bgColors: Record<string, string> = {
    "slate-400": "bg-zinc-500",
    "emerald-400": "bg-emerald-500",
    "amber-400": "bg-amber-500",
    "red-400": "bg-red-500"
};

export const GridItem = ({ item }: Props) => {
    return (
        <div
            className={`${bgColors[item.color]} flex-1 text-white rounded-xl flex flex-col justify-center items-center p-2.5`}
        >
            <div className="size-20 rounded-full bg-black opacity-20 flex justify-center items-center">
                <img src={item.icon === 'up' ? '/assets/up.png' : '/assets/down.png'} alt="" width={30} />
            </div>
            <div className="text-2xl font-bold mt-1.5">{item.title}</div>

            {item.yourImc &&
                <div className="text-base mt-2.5 mb-12">Seu IMC é de {item.yourImc} kg/m²</div>
            }

            <div className="text-sm mt-3.5">
                <>
                    IMC está entre <strong>{item.imc[0]}</strong> e <strong>{item.imc[1]}</strong>
                </>
            </div>
        </div>
    );
}