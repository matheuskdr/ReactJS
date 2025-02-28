type Props = {
    params: {
        slug: string[];
    }
}
const Page = ({ params }: Props) => {
    return (
        <div>
            FILTROS: {params.slug.join(', ')}
        </div>
    );
}

export default Page;