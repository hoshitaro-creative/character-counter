// import Link from 'next/link'
import { Button } from "@chakra-ui/button";
import { Flex } from "@chakra-ui/layout";
import { Box, Input } from "@chakra-ui/react";
import LogoutButton from "components/atoms/LogoutButton";
import SigninButton from "components/atoms/SigninButton";
import Layout from "components/Layout";
import Page from "components/Page";
import {
  getAuth,
  isSignInWithEmailLink,
  onAuthStateChanged,
  signInWithEmailLink,
  User,
} from "firebase/auth";
import init from "firebaseInit";
import { useEffect, useState } from "react";

const AppPage = () => {
  init();
  const [pageNumber, setPageNumber] = useState(1);
  const [user, setUser] = useState<User | null>(null);
  const [email, setEmail] = useState("");
  const [url, setUrl] = useState("");

  useEffect(() => {
    onAuthStateChanged(getAuth(), (user) => {
      setUser(user);
    });
    setUrl(window.location.href);
  }, []);

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
      ) : isSignInWithEmailLink(getAuth(), url) ? (
        <Flex justifyContent={"center"}>
          <Input
            placeholder="email"
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          ></Input>
          <Button
            onClick={() => {
              signInWithEmailLink(getAuth(), email, url).catch(
                (error) => {
                  console.log(error);
                }
              );
            }}
          >submit</Button>
        </Flex>
      ) : (
        <SigninButton></SigninButton>
      )}
    </Layout>
  );
};

export default AppPage;
