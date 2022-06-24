import styles from './Avatar.module.css';

export function Avatar({hasBorder, src}){
  return(
      <img src={src} className={hasBorder ? styles.avatarWithBorder : styles.avatar} />
  )
}