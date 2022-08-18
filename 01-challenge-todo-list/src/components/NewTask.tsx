import { PlusCircle } from "phosphor-react";
import styles from "./NewTask.module.css";
export function NewTask() {
  return (
    <form className={styles.newtask}>
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
