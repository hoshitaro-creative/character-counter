// import Link from 'next/link'
import { Button } from "@chakra-ui/button";
import { Flex } from "@chakra-ui/layout";
import { Box } from "@chakra-ui/react";
import LogoutButton from "components/atoms/LogoutButton";
import Layout from "components/Layout";
import Page from "components/Page";
import app from "firebase";
import { getAuth, onAuthStateChanged, User } from "firebase/auth";
import { useEffect, useState } from "react";

const AppPage = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() =>
    onAuthStateChanged(getAuth(app), (user) => {
      setUser(user);
    })
  );

  return (
    <Layout title="character counter app">
      {user ? (
        <>
          <Box backgroundColor="red.100" height={100}></Box>
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
        </>
      ) : (
        <Box>ログインしていません</Box>
      )}
    </Layout>
  );
};

export default AppPage;
