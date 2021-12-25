// import Link from 'next/link'
import { Button } from "@chakra-ui/button";
import { Flex } from "@chakra-ui/layout";
import { Box } from "@chakra-ui/react";
import LogoutButton from "components/atoms/LogoutButton";
import Layout from "components/Layout";
import Page from "components/Page";
import { useState } from "react";

const AppPage = () => {
  const [pageNumber, setPageNumber] = useState(1);

  return (
    <Layout title="character counter app">
      <Box backgroundColor="red.100" height={100}>
      </Box>
      <Flex direction="row-reverse">
        <LogoutButton></LogoutButton>
      </Flex>
      <Flex direction="row" justifyContent="center">
        <Button
          onClick={() => {
            setPageNumber(pageNumber - 1);
          }}
        >
          -
        </Button>
        <Box>{pageNumber}</Box>
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

export default AppPage;
