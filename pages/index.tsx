// import Link from 'next/link'
import Layout from "../components/Layout";
import Cell from "../components/molecules/Cell";

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <Cell maxLength={10}></Cell>
  </Layout>
);

export default IndexPage;
