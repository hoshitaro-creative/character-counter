import Layout from "components/Layout";
import Link from "next/link";

const IndexPage = (): JSX.Element => {
  return (
    <Layout title="top page">
      <Link href="/login">
        <a>ログインページへ</a>
      </Link>
    </Layout>
  );
};

export default IndexPage;
