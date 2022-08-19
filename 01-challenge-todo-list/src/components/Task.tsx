import { Trash } from "phosphor-react";
import styles from "./Task.module.css";

interface TaskProps {
  id: string;
  content: string;
  isDone: boolean;
  onDeleteTask: (taskToDelete: string) => void;
  onCheckTask: (taskToCheckDone: string) => void;
}

export function Task({
  content,
  isDone,
  id,
  onDeleteTask,
  onCheckTask,
}: TaskProps) {
  function handleDeleteTask() {
    onDeleteTask(id);
  }

  function handleCheckDoneTask() {
    onCheckTask(id);
  }

  return (
    <div className={styles.task}>
      <input type="checkbox" checked={isDone} onClick={handleCheckDoneTask} />
      <p className={isDone ? styles.taskDone : ""}>{content}</p>
      <button onClick={handleDeleteTask}>
        <Trash size={16} />
      </button>
    </div>
  );
}
