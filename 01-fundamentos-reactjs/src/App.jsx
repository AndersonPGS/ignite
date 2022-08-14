import { Header } from "./components/Header"
import { Post } from "./components/Post"
import { Sidebar } from "./components/Sidebar"

import styles from "./App.module.css"
import "./global.css"

// Data
// author: {avatarUrl: "", name: "", role: ""}
// publishedAt: Date
// content: String

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/andersonpgs.png",
      name: "Anderson Paiva",
      role: "Front End Developer"
    },
    content: [
      { type: "paragraph", content: "Olá seja bem vindo ao meu post" },
      { type: "paragraph", content: "Me siga para saber mais informações e desenvolvimentos futuros" },
      { type: "link", content: "github.com/andersonpgs" },
      { type: "link", content: "#rocketseat" }
    ],
    publishedAt: new Date("2022-08-12 12:00:00")
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/diego3g.png",
      name: "Diego Fernandes",
      role: "CTO @Rocketseat"
    },
    content: [
      { type: "paragraph", content: "Parabéns Anderson Paiva" },
      { type: "paragraph", content: "Você foi selecionado para trabalhar junto conosco aqui na @Rocketseat" },
      { type: "link", content: "app.rocketseat.com.br" },
      { type: "link", content: "#rocketseat" }
    ],
    publishedAt: new Date("2022-08-12 09:00:00")
  },
]

export function App() {
  return (
    <>
      <Header />
      
      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </>
  )
}

