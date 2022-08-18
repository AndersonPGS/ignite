import { PlusCircle } from "phosphor-react";
import styles from "./TaskInput.module.css";
export function TaskInput() {
  return (
    <form className={styles.taskinput}>
      <input type="text" name="task" placeholder="Adicione uma nova tarefa" />
      <button type="submit">
        Criar{" "}
        <span>
          <PlusCircle size={16} weight="bold" />
        </span>
      </button>
    </form>
  );
}
