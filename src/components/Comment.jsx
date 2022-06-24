import { ThumbsUp, Trash } from "phosphor-react";
import { Avatar } from "./Avatar";
import styles from "./Comment.module.css";

export function Comment({text}) {
  return (
  <div className={styles.comment}>
    <Avatar src="https://github.com/joaopedroalc.png" hasBorder={false} />

    <div className={styles.commentBox}>
      <div className={styles.commentContent}>
        <header>
          <div className={styles.authorAndTime}>
            <strong>João Pedro Lima</strong>
            <time title="14 de Abril às 9:35h" dateTime="2022-04-14 09:35:30">Cerca de 2h atrás</time>
          </div>

          <button title="Deletar comentário">
            <Trash size={24} />
          </button>
        </header>

        <p>
          {text ? text : "Parabens pepeto"}
        </p>
      </div>  

      <footer>
        <button>
          <ThumbsUp />
          Aplaudir <span>20</span>
        </button>
      </footer>
    </div>


  </div>
  );
}
