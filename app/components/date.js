import { parseISO, format } from 'date-fns';
import styles from "../styles/articles.module.scss";

export default function Date({ dateString }) {
  const date = parseISO(dateString);
  return <p className={styles.date}><time dateTime={dateString}>{format(date, 'yyyy.MM.dd')}</time></p>;
}