// import Link from 'next/link'
import { configs } from "sample/config";
import Layout from "../components/Layout";
import Table from "../components/molecules/Table";

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    {configs.map((config, i) => (
      <Table tableConfig={config} key={i}></Table>
    ))}
  </Layout>
);

export default IndexPage;
