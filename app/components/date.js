import { parseISO, format } from 'date-fns';
import ja from 'date-fns/locale/ja'
import styles from "../styles/articles.module.scss";

export default function Date({ dateISO }) {
  const date = parseISO(dateISO);
  return (
    <p className={styles.date}>
      <time dateTime={dateISO}>{format(date, 'yyyy.MMMM.dd', {
        locale: ja,
      })}
      </time>
    </p>
  );
}