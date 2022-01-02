import { StackDivider, VStack } from "@chakra-ui/layout";
import Layout from "components/Layout";
import pages from "../sample/index";
import Table from "./molecules/Table";

type Props = {
  pid: number;
  pageData: string[][][];
};

const Page: React.VFC<Props> = ({ pid, pageData }) => {
  const calculateConfigNumber = (pid: number): number => {
    if (pid === 1) {
      return 1;
    } else if (1 < pid && pid % 2 === 0) {
      return 2;
    } else if (1 < pid && pid % 2 === 1) {
      return 3;
    } else {
      return 0;
    }
  };
  const configs = pages[calculateConfigNumber(pid)];

  return (
    <Layout>
      {1 <= pid ? (
        <VStack divider={<StackDivider></StackDivider>}>
          {configs.map((config, i) => {
            pageData.push([])
            return (
              <Table
                tableConfig={config}
                key={i}
                tableData={pageData[i]}
              ></Table>
            );
          })}
        </VStack>
      ) : (
        "no data"
      )}
    </Layout>
  );
};

export default Page;
