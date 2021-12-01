// import Link from 'next/link'
import { Button } from "@chakra-ui/button";
import { Flex } from "@chakra-ui/layout";
import Page from "components/Page";
import { useState } from "react";
import Layout from "../components/Layout";

const IndexPage = () => {
  const [pageNumber, setPageNumber] = useState(1);
  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <Flex direction="row">
        <Button
          onClick={() => {
            setPageNumber(pageNumber - 1);
          }}
        >
          -
        </Button>
        {pageNumber}
        <Button
          onClick={() => {
            setPageNumber(pageNumber + 1);
          }}
        >
          +
        </Button>
      </Flex>
      <Page pid={pageNumber}></Page>
    </Layout>
  );
};

export default IndexPage;
