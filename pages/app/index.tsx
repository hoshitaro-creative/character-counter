import { Button } from "@chakra-ui/button";
import { Flex } from "@chakra-ui/layout";
import { Box, Input } from "@chakra-ui/react";
import LogoutButton from "components/atoms/LogoutButton";
import Layout from "components/Layout";
import Page from "components/Page";
import { saveAs } from "file-saver";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { doc, getDoc, getFirestore, updateDoc } from "firebase/firestore";
import init from "firebaseInit";
import { useEffect, useState } from "react";
import { format } from "date-fns";
import ja from "date-fns/locale/ja";

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
  const renameDoc = () => {
    const docRef = doc(db, "pages", "E2R3Ewu5dqc3j01W9mrg");
    getDoc(docRef).then((snapshot) => {
      console.log(snapshot.data());
    });
    updateDoc(docRef, {});
  };

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
            <Button onClick={renameDoc}>rename</Button>
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
