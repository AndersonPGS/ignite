import { Avatar } from "./Avatar"
import { Comment } from "./Comment"
import styles from "./Post.module.css"

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src="https://github.com/andersonpgs.png" />
          <div className={styles.authorInfo}>
            <strong>Anderson Paiva</strong>
            <span>Front End Developer</span>
          </div>

        </div>
        <time title="11 de Agosto às 11:14" dateTime="2022-08-11 11:14:15">Publicado há 1h</time>
      </header>

      <div className={styles.content}>
        <p>Olá seja bem vindo ao meu post</p>
        <p>Me siga para saber mais informações e desenvolvimentos futuros</p>
        <p>🗿 <a href="https://github.com/andersonpgs">github.com/andersonpgs</a></p>
        <p><a href="#">#rocketseat</a></p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea placeholder="Deixe um comentário" />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
        
      </form>

      <div className={styles.commentList}>
        <Comment/>
        <Comment/>
        <Comment/>
      </div>
    </article>
  )
}