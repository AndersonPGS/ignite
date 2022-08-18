import styles from "./App.module.css";
import { Header } from "./components/Header";
import { TaskInput } from "./components/TaskInput";
import "./global.css";

export function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <TaskInput />
      </div>
    </>
  );
}
