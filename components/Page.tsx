import { StackDivider, VStack } from "@chakra-ui/layout";
import Layout from "components/Layout";
import Table from "./molecules/Table";
import pages from "../sample/index"

type Props = {
  pid: number;
}

const Page: React.VFC<Props> = ({pid}) => {

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
      {pid ? (
        <VStack divider={<StackDivider></StackDivider>}>
          {configs.map((config, i) => (
            <Table tableConfig={config} key={i}></Table>
          ))}
        </VStack>
      ) : (
        "no data"
      )}
    </Layout>
  );
};

export default Page;
