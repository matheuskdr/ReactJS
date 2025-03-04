type Props = {
    label: string;
    value: string;
}

export const InfoItem = ({ label, value }: Props) => {
    return (
        <div className="my-5">
            <div className="text-[#6A7D8B] text-sm">{label}</div>
            <div className="text-4xl font-bold text-[#101c40]">{value}</div>
        </div>
    );
}