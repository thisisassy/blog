import styles from "../styles/notice.module.scss";

export default function Notice() {
  return (
    <div className={styles.notice}>
      <a href="https://www.youtube.com/@carryonmyway" target="_new">
        旅の様子はYoutubeでも見れます
      </a>
    </div>
  )
}