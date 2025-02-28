type Props = {
    params: {
        postId: string;
    }
}
const Page = ({ params }: Props) => {
    return (
        <div>
           blog: {params.postId}
        </div>
    );
}

export default Page;