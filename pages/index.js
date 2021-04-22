export default function Index() {
  return (
      <div>Hello World Index</div>
  )
}

export const getStaticProps = async () => {
  return {
      revalidate: 60,
      props: {},
  };
};

