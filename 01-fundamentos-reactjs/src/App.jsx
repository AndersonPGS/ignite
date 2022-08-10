import { Header } from "./components/Header"
import { Post } from "./Post"

import styles from "./App.module.css"
import { Sidebar } from "./components/Sidebar"
import "./global.css"


export function App() {
  return (
    <>
      <Header />
      
      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          <Post
            author="Anderson Paiva"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis repellendus amet eaque animi, labore deleniti sed provident enim tempore! Odio maxime deleniti libero explicabo animi voluptas, tempore hic blanditiis nemo."
          />
          <Post
            author="Rocketseat"
            content="Olá Anderson, você foi aceito e agora faz parte da Rocketseat ❤️."
          />
        </main>
      </div>
    </>
  )
}

