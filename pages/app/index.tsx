import { Button } from "@chakra-ui/button";
import { Flex } from "@chakra-ui/layout";
import { Box } from "@chakra-ui/react";
import LogoutButton from "components/atoms/LogoutButton";
import Layout from "components/Layout";
import Page from "components/Page";
import { getAuth, User, onAuthStateChanged } from "firebase/auth";
import init from "firebaseInit";
import { useEffect, useState } from "react";

const AppPage = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [user, setUser] = useState<User | null>(null);
  init();
  useEffect(() => {
    onAuthStateChanged(getAuth(), () => {
      getAuth()
        .currentUser?.reload()
        .then(() => {
          setUser(getAuth().currentUser);
        });
    });
  });

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
        <Box>
          ログインしていません、もしくは許可されたユーザーではありません
        </Box>
      )}
    </Layout>
  );
};

export default AppPage;
