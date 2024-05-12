import Link from 'next/link'
import Container from "./container";
import styles from "../styles/header.module.scss";

export default function Header() {
  return (
    <header className={styles.header}>
      <Container large>
        <div className={styles.headerInner}>
          <div className={styles.headerTitle}>
            <h1><Link href="/">CarryOnMyWay!</Link></h1>
            <p>“One Bag Travel”をテーマに身軽に旅する旅行ブログ</p>
          </div>
          <nav>
            <ul className={styles.globalNav}>
              <li><Link href="/">パッキングリスト</Link></li>
              <li><Link href="/">国内旅行</Link></li>
              <li><Link href="/">海外旅行</Link></li>
            </ul>
          </nav>
        </div>
      </Container>
    </header >
  )
}