import styles from "./Post.module.css"

export function Post() {
  return (
    <article>
      <header>
        <div className={styles.author}>
          <img className={styles.avatar} src="https://github.com/andersonpgs.png" />
          <div className={styles.authorInfo}>
            <strong>Anderson Paiva</strong>
            <span>Front End Developer</span>
          </div>

          <time title="11 de Agosto às 11:14" dateTime="2022-08-11 11:14:15">Publicado há 1h</time>
        </div>
      </header>

      <div className={styles.content}>
        <p>Olá seja bem vindo ao meu post</p>
        <p>Me siga para saber mais informações e desenvolvimentos futuros</p>
        <p>🗿 <a href="https://github.com/andersonpgs">github.com/andersonpgs</a></p>
        <p><a href="#">#rocketseat</a></p>
      </div>
    </article>
  )
}