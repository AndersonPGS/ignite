import clipboard from "../assets/clipboard.svg";

import styles from "./EmptyTask.module.css";

export function EmptyTask() {
  return (
    <div className={styles.emptytask}>
      <img src={clipboard} />
      <strong>Você ainda não tem tarefas cadastradas</strong>
      <p>Crie tarefas e organize seus itens a fazer</p>
    </div>
  );
}
