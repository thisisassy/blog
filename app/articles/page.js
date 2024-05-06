import Meta from "../components/meta";
import Layout from "../components/layout";
import Section from "app/components/section";
import Articles from "../components/articles";

export default async function AllPosts() {
  return (
    <Layout>
      <Meta pageTitle="All Posts" />
      <Section>
        <h1>All Posts</h1>
        <Articles />
      </Section>
    </Layout>
  )
}
