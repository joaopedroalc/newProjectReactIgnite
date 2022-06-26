import { format, formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import styles from "./Post.module.css";



export function Post({author, content, publishedAt}){
  console.log(author)
  console.log(content)
  console.log(publishedAt)

  const publishedDateFormatted  = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR
  })

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true
  })

  return(
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
        <Avatar src={author.avatarUrl} hasBorder />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>{publishedDateRelativeToNow}</time>
      </header>

      <div className={styles.content}>
        {content.map(text => {
          if(text.type === "paragraph"){
            return <p>{text.content}</p>
          } else if(text.type === "link"){
            return <p><a href="#">{text.content}</a></p>
          }
        })}
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea
          placeholder="Deixe um comentário"
        />
        <footer>
        <button type="submit">
          Publicar
        </button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment text="Oi , bem vindo johny" />
        <Comment text="Oi , bem vinda maria" />
        <Comment />
      </div>
    </article>
  )
}