import { ThumbsUp, Trash } from "phosphor-react"
import styles from "./Comment.module.css"

export function Comment() {
  return (
    <div className={styles.comment}>
      <img src="https://github.com/andersonpgs.png" />
      
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Anderson Paiva</strong>
              <time title="11 de Agosto às 11:14" dateTime="2022-08-11 11:14:15">Cerca de 1h atrás</time>
            </div>
            <button title="Deletar comentário">
              <Trash size={20}/>
            </button>
          </header>
          <p>Parabéns Anderson, seja bem vindo 😊🐈</p>
        </div>
        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}