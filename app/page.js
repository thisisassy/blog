import Link from 'next/link';
import Layout from "./components/layout";
import Section from "./components/section";
import Articles from "./components/articles";
import Notice from "./components/notice";
import styles from "./styles/index.module.scss";

export default async function Home() {
  return (
    <Layout>
      <Notice />
      <Section>
        <Articles />
        <div className={styles.seeMoreLink}>
          <p><Link href="/articles">View All Posts →</Link></p>
        </div>
      </Section>
    </Layout>
  );
}
