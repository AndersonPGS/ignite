import styles from "./App.module.css";
import { Header } from "./components/Header";
import { Tasks } from "./components/Tasks";
import "./global.css";

export function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Tasks />
      </div>
    </>
  );
}
