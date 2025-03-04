type Props = {
    label: string;
    icon: string;
    onClick: React.MouseEventHandler<HTMLDivElement>;
};

export default function Button({ label, icon, onClick }: Props) {
    return (
        <div onClick={onClick} className="w-48 h-12 flex bg-[#1550FF] rounded-lg cursor-pointer opacity-100 hover:opacity-90 duration-300 ">
            <div className="h-12 flex justify-center items-center border-r border-r-gray-400 px-3.5">
                <img className="h-5" src="/svgs/restart.svg" alt="" />
            </div>
            <div className="h-12 text-white flex justify-center items-center flex-1 px-5">{label}</div>
        </div>
    );
}