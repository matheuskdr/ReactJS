type Props = {
    params: {
        name: string;
    }
}
const Page = ({ params }: Props) => {
    return (
        <div>
            Página Sobre {params.name}
        </div>
    );
}

export default Page;