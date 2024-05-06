import Link from "next/link";
import { getArticles, getArticleBySlug } from "app/lib/newt";
import Layout from "../../components/layout";
import Section from "app/components/section";
import Sidebar from "app/components/sidebar";
import Date from "../../components/date";
import styles from "../../styles/singlepage.module.scss";

async function generateStaticParams() {
  const articles = await getArticles();
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

const dynamicParams = false;

async function generateMetadata({ params }) {
  const { slug } = params;
  const article = await getArticleBySlug(slug);

  return {
    title: article?.title,
    description: '個別記事ページ',
  };
}

module.exports = async function Article({ params }) {
  const { slug } = params;
  const article = await getArticleBySlug(slug);
  if (!article) return;

  return (
    <Layout>
      <Section post>
        <div className={styles.postContainer}>
          <div className={styles.postHeader}>
            <h1>{article.title}</h1>
            <div className={styles.postHeaderMeta}>
              <ul className={styles.categories}></ul>
              <Date dateString={article.dateTime} />
            </div>
          </div>
          <div className={styles.body} dangerouslySetInnerHTML={{ __html: article.body }} />
        </div>
        <Sidebar />
      </Section>
    </Layout>
  );
};