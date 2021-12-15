import { Button } from "@chakra-ui/react";
import Layout from "components/Layout";
import Link from "next/link";

const IndexPage = (): JSX.Element => {
  return (
    <Layout title="top page">
      <Button>
        <Link href="/login">
          <a>ログインページへ</a>
        </Link>
      </Button>
    </Layout>
  );
};

export default IndexPage;
