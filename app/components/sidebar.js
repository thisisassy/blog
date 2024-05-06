import Link from 'next/link'
import styles from "../styles/sidebar.module.scss";

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.profile}>
        <h1>HARUKA</h1>
        <p>ブロガー・Youtuber<br />
          かばん1つで旅する”OneBagTravel”をモットーに身軽な旅を実践しています.</p>
        <div className={styles.links}>
          <Link href="/about">PROFILE</Link>
          <a href="/rss" className={styles.rss}>RSS</a>
        </div>
      </div>
    </aside>
  )
}