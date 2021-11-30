// import Link from 'next/link'
import { StackDivider, VStack } from "@chakra-ui/layout";
import { configs } from "sample/config02";
import Layout from "../components/Layout";
import Table from "../components/molecules/Table";

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <VStack divider={<StackDivider></StackDivider>}>
      {configs.map((config, i) => (
        <Table tableConfig={config} key={i}></Table>
      ))}
    </VStack>
  </Layout>
);

export default IndexPage;
