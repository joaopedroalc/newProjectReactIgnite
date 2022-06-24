import styles from "./Header.module.css";

import IgniteSimbol from "../assets/IgniteSimbol.svg"

export function Header(){
  return(
    <div className={styles.header}>
      <img src={IgniteSimbol} alt="IgniteSimbol" />
      <strong className={styles.text}>Ignite Feed</strong>
    </div>
  )
}