import { Box, Button, Flex } from "@chakra-ui/react";
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
      <Flex direction="row" justifyContent="center">
        <Box>{"(c) 2021 viewpointics-tan"}</Box>
      </Flex>
    </Layout>
  );
};

export default IndexPage;
