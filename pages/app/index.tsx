// import Link from 'next/link'
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import { Button } from "@chakra-ui/button";
import { Flex } from "@chakra-ui/layout";
import { Box } from "@chakra-ui/react";
import LogoutButton from "components/atoms/LogoutButton";
import Layout from "components/Layout";
import Page from "components/Page";
import { useState } from "react";

const AppPage = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [apiResponse, setApiResponse] = useState("");
  const { getAccessTokenSilently } = useAuth0();

  const callSecureApi = async () => {
    const token = await getAccessTokenSilently();
    const response = await fetch(
      "https://mbnr69t3i6.execute-api.ap-northeast-1.amazonaws.com/hello",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    response
      .json()
      .then((json) => {
        setApiResponse(JSON.stringify(json));
      })
      .catch((error) => {
        setApiResponse(JSON.stringify(error));
      });
  };

  return (
    <Layout title="character counter app">
      <Box onClick={callSecureApi} backgroundColor="red.100">
        {apiResponse}
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

export default withAuthenticationRequired(AppPage);
