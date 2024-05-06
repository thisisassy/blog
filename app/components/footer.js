import Link from 'next/link'
import Container from "./container";
import styles from "../styles/footer.module.scss";

export default function Footer() {
  return (
    <footer>
      <Container large>
        <div className={styles.footerInner}>
          <ul>
            <li><Link href="/about">このサイトについて</Link></li>
            <li><Link href="/rss">購読する</Link></li>
            <li><Link href="/">サポートする</Link></li>
            <li><Link href="/contact">お問い合わせ</Link></li>
            <li><Link href="/">プライバシーポリシー</Link></li>
          </ul>
        </div>
        <div className={styles.footerOuter}>
          <div className={styles.headerTitle}>
            <h1><Link href="/">CarryOnMyWay!</Link></h1>
            <p>“One Bag Travel”をテーマに身軽に旅する旅行ブログ</p>
          </div>
          <p className={styles.copyright}><span>&copy;</span> 2024 Made with ❤️‍🔥 Hyogo, Japan. All Rights Reserved.</p>
        </div>
      </Container>
    </footer >
  )
}