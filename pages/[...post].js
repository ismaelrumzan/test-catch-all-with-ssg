export default function Home() {
    return (
        <div>Hello World</div>
    )
}

export const getStaticProps = async () => {
    return {
        revalidate: 60,
        props: {},
    };
};

export async function getStaticPaths() {
    // do async work to fetch from server

    return {
        paths: [
            { params: { post: ['foo', 'bar'] } },
        ],
        fallback: "blocking",
    };
}
