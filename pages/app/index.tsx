import { Button } from "@chakra-ui/button";
import { Flex } from "@chakra-ui/layout";
import { Box } from "@chakra-ui/react";
import LogoutButton from "components/atoms/LogoutButton";
import Layout from "components/Layout";
import Page from "components/Page";
import { getAuth, User, onAuthStateChanged } from "firebase/auth";
import init from "firebaseInit";
import { useEffect, useState } from "react";
import { saveAs } from "file-saver";

type PageData = string[][][];
type PagesData = PageData[];

const AppPage = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [user, setUser] = useState<User | null>(null);
  const [pagesData, setPagesData] = useState<PagesData>([]);
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

  const arrayToCsvString = (array: string[][]) =>
    array
      .map((row) => row.reduce((acc, text) => acc + text + ",", ""))
      .reduce((acc, row) => acc + row + "\n", "");
  const saveCsv = () => {
    saveAs(
      new Blob([arrayToCsvString(pagesData.flat(2))]),
      `page${pageNumber}.csv`
    );
  };

  const addEmptyPage = (number: number) => {
    if (pagesData.length < number) {
      setPagesData([...pagesData, []]);
    }
    return pagesData;
  };

  return (
    <Layout title="character counter app">
      {user ? (
        <>
          <Flex direction="row" justify={"space-between"}>
            <Button onClick={saveCsv}>
              このページをcsvとしてダウンロードする
            </Button>
          </Flex>
          <Flex direction="row" justifyContent="center">
            <Button
              onClick={() => {
                if (pageNumber > 1) {
                  setPageNumber(pageNumber - 1);
                }
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
          <Page
            pid={pageNumber}
            pageData={addEmptyPage(pageNumber)[pageNumber - 1]}
          ></Page>
          <Flex direction={"row"}>
            <LogoutButton></LogoutButton>
          </Flex>
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
