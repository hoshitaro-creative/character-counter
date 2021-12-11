// import Link from 'next/link'
import { Button } from "@chakra-ui/button";
import { Flex } from "@chakra-ui/layout";
import Page from "components/Page";
import { useState } from "react";
import Layout from "components/Layout";
import LogoutButton from "components/atoms/LogoutButton";
import { withAuthenticationRequired } from "@auth0/auth0-react";
import { HStack } from "@chakra-ui/react";

const AppPage = () => {
  const [pageNumber, setPageNumber] = useState(1);
  return (
    <Layout title="character counter app">
      <Flex direction="row-reverse">
        <LogoutButton></LogoutButton>
      </Flex>
      <Flex direction="row">
        <LogoutButton></LogoutButton>
        <Button
          onClick={() => {
            setPageNumber(pageNumber - 1);
          }}
        >
          -
        </Button>
        <HStack>{pageNumber}</HStack>
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

export default withAuthenticationRequired(AppPage);
