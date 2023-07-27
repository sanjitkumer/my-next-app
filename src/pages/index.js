import Head from "next/head";
import RootLayout from "../components/Layouts/RootLayout";

const HomePage = () => {
  return (
    <div>
      <Head>
        <title>Next Home Page</title>
        <meta name="home page" description="this page in create by next js" />
      </Head>
      <h1>This is Home page</h1>
    </div>
  );
};

export default HomePage;

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
