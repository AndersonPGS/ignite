import { Task } from "./Task";
import styles from "./Tasks.module.css";

export function Tasks() {
  return (
    <div className={styles.tasks}>
      <div className={styles.info}>
        <div className={styles.created}>
          Tarefas criadas <span>5</span>
        </div>
        <div className={styles.done}>
          Concluídas <span>2 de 5</span>
        </div>
      </div>

      <Task />
      <Task />
      <Task />
    </div>
  );
}
