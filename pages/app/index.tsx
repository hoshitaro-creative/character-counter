import { Button } from "@chakra-ui/button";
import { Flex } from "@chakra-ui/layout";
import { Box, Input } from "@chakra-ui/react";
import LogoutButton from "components/atoms/LogoutButton";
import Layout from "components/Layout";
import Page from "components/Page";
import { format } from "date-fns";
import ja from "date-fns/locale/ja";
import { saveAs } from "file-saver";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { doc, getFirestore, setDoc } from "firebase/firestore";
import init from "firebaseInit";
import { useEffect, useState } from "react";
import nestedArrayToObject from "utils/arrayToObject";

type PageData = string[][][];
type PagesData = PageData[];

const AppPage = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [user, setUser] = useState(false);
  const [pagesData, setPagesData] = useState<PagesData>([]);
  init();
  useEffect(() => {
    onAuthStateChanged(getAuth(), () => {
      getAuth()
        .currentUser?.reload()
        .then(() => {
          setUser(!!getAuth().currentUser);
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

  const db = getFirestore();

  const [docId, setDocId] = useState("");
  const [projectName, setProjectName] = useState("default-project");
  const [koma, setKoma] = useState("1");
  const [title, setTitle] = useState("default-title");

  return (
    <Layout title="character counter app">
      {docId === "" ? (
        <Flex direction={"column"}>
          <Flex direction={"row"}>
            <Input
              placeholder="プロジェクト名（DT or V）"
              onChange={(e) => {
                setProjectName(e.target.value);
              }}
            ></Input>
            <Input
              placeholder="コマ数"
              onChange={(e) => {
                setKoma(e.target.value);
              }}
            ></Input>
            <Input
              placeholder="指導案タイトル"
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            ></Input>
          </Flex>
          <Flex>
            <Box>{`${projectName}_${koma}_${title}_${
              getAuth().currentUser?.email?.split("@")[0]
            }_指導案`}</Box>
            <Button
              onClick={() => {
                setDocId(
                  `${projectName}_${koma}_${title}_${
                    getAuth().currentUser?.email?.split("@")[0]
                  }_指導案_${format(new Date(), "yyyy-MM-dd-HH-mm-ss", {
                    locale: ja,
                  })}`
                );
              }}
            >
              ドキュメントIDを決定する
            </Button>
          </Flex>
        </Flex>
      ) : user ? (
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
                  setDoc(doc(db, "pages", `${docId}`), {
                    data: nestedArrayToObject(pagesData),
                  });
                }
              }}
            >
              -
            </Button>
            <Box>{pageNumber}</Box>
            <Button
              onClick={() => {
                setPageNumber(pageNumber + 1);
                setDoc(doc(db, "pages", `${docId}`), {
                  data: nestedArrayToObject(pagesData),
                });
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
