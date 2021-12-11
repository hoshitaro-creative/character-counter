import Layout from "components/Layout";
import Link from "next/link";
import { Button } from "@chakra-ui/react";

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
