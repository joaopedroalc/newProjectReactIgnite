import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import styles from "./Post.module.css";

export function Post(){
  return(
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
        <Avatar src="https://github.com/joaopedroalc.png" hasBorder />
          <div className={styles.authorInfo}>
            <strong>João Pedro</strong>
            <span>Web Dev</span>
          </div>
        </div>

        <time title="14 de Abril às 9:35h" dateTime="2022-04-14 09:35:30">Publicado há 2 meses</time>
      </header>

      <div className={styles.content}>
      <p>Fala galeraa 👋</p>

      <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

      <p>
        <a href="#">👉 jane.design/doctorcare</a>
      </p>

      <p>
        <a href="#">
        #novoprojeto
        </a>{" "}
        <a href="#">
        #nlw
        </a>{" "}
        <a href="#">
        #rocketseat
        </a>
        </p>
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
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  )
}