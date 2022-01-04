import { Box, Button, Flex } from "@chakra-ui/react";
import { format } from "date-fns";
import ja from "date-fns/locale/ja";
import { getAuth } from "firebase/auth";
import {
  getBlob,
  getStorage,
  listAll,
  ref,
  StorageReference,
} from "firebase/storage";
import { SetStateAction, useEffect, useState } from "react";

type PageData = string[][][];
type PagesData = PageData[];

type Props = {
  setProjectName: (value: SetStateAction<string>) => void;
  setKoma: (value: SetStateAction<string>) => void;
  setTitle: (value: SetStateAction<string>) => void;
  setDocId: (value: SetStateAction<string>) => void;
  projectName: string;
  koma: string;
  title: string;
  setPagesData: (value: SetStateAction<PagesData>) => void;
  setIsShowedList: (value: SetStateAction<boolean>) => void;
};

const List = ({
  setProjectName,
  setKoma,
  setTitle,
  setDocId,
  projectName,
  koma,
  title,
  setIsShowedList,
  setPagesData,
}: Props) => {
  const [itemList, setItemList] = useState<StorageReference[]>([]);
  const itemNames = itemList.map((ref) => ref.name);
  const [selectedItem, setSelectedItem] = useState<StorageReference>();

  useEffect(() => {
    listAll(ref(getStorage())).then((list) => {
      setItemList(list.items);
    });
  });
  return (
    <Flex direction={"column"} justify={"space-between"}>
      <Box>{`${selectedItem?.name}`}</Box>

      <Button
        onClick={() => {
          const isStorageRefarence = (
            item: StorageReference | undefined
          ): item is StorageReference => typeof item !== undefined;

          if (isStorageRefarence(selectedItem)) {
            getBlob(selectedItem).then((blob) => {
              blob.text().then((string) => {
                console.log(JSON.parse(string));
                setDocId(
                  `${projectName}_${koma}_${title}_${
                    getAuth().currentUser?.email?.split("@")[0]
                  }_指導案_${format(new Date(), "yyyy-MM-dd-HH-mm-ss", {
                    locale: ja,
                  })}.json`
                );
                setIsShowedList(false);
              });
            });
          }
        }}
      >
        選択したドキュメントをもとに、編集を開始する
      </Button>
      {itemNames.map((name, i) => (
        <Box
          key={i}
          onClick={() => {
            setSelectedItem(itemList[i]);
            const splited = name.split("_");
            setProjectName(splited[0]);
            setKoma(splited[1]);
            setTitle(splited[2]);
          }}
        >
          {name}
        </Box>
      ))}
      <Button
        onClick={() => {
          setDocId("");
          setIsShowedList(false);
        }}
      >
        新規作成する
      </Button>
    </Flex>
  );
};

export default List;
