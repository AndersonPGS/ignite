import { Trash } from "phosphor-react";
import styles from "./Task.module.css";

interface TaskProps {
  id: string;
  content: string;
  isDone: boolean;
  onDeleteTask: (taskToDelete: string) => void;
}

export function Task({ content, isDone, id, onDeleteTask }: TaskProps) {
  function handleDeleteTask() {
    onDeleteTask(id);
  }

  return (
    <div className={styles.task}>
      <input type="checkbox" checked={isDone} />
      <p className={isDone ? styles.taskDone : ""}>{content}</p>
      <button onClick={handleDeleteTask}>
        <Trash size={16} />
      </button>
    </div>
  );
}
