import { format, formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import { useState } from "react";
import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import styles from "./Post.module.css";


export function Post({author, content, publishedAt}){
  const [comments, setComments] = useState([
    "eu sou o trem"
  ]);

  const [newCommentText, setNewCommentText] = useState('');

  const publishedDateFormatted  = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR
  })

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true
  })

  function handleFormSubmit(){
    event.preventDefault();
    setComments([...comments,newCommentText])
    setNewCommentText('')
  }

  function handleNewCommentChange() { 
    // console.log(event.target.value)
    setNewCommentText(event.target.value);
    console.log(newCommentText)
  }

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
            return <p key={text.content}>{text.content}</p>
          } else if(text.type === "link"){
            return <p key={text.content}><a href="#">{text.content}</a></p>
          }
        })}
      </div>

      <form onSubmit={handleFormSubmit} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea
          onChange={handleNewCommentChange}
          value={newCommentText}
          name="comment"
          placeholder="Deixe um comentário"
        />
        <footer>
        <button type="submit">
          Publicar
        </button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map(comment => {
          return <Comment key={comment} content={comment} />
        })}
      </div>
    </article>
  )
}