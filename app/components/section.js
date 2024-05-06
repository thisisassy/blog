import Container from "./container";
import styles from "../styles/section.module.scss";


export default function Section({ children, post = false }) {
  return (
    <Container large>
      <section className={post ? styles.postSection : styles.section}>{children}</section>
    </Container>
  )
}