import Link from 'next/link';
import Img from 'next/image';
import { getArticles } from 'app/lib/newt';
import styles from "../styles/articles.module.scss";
import Date from './date';

export default async function Articles() {
  const articles = await getArticles();
  return (
    <div className={styles.postList}>
      {articles.map((article) => (
        <article key={article._id} className={styles.post}>
          <Link href={`articles/${article.slug}`}>
            <figure>
              <Img src={article.coverImage} alt={article.title} width="" height="" />
            </figure>
            <h1 className={styles.title}>{article.title}</h1>
          </Link>
          <div className={styles.postMeta}>
            <Date dateString={article.dateTime} />
            <ul className={styles.categories}>
            </ul>
          </div>
        </article>
      ))}
    </div>
  )
}