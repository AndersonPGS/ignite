import { PlusCircle } from "phosphor-react";
import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";
import styles from "./NewTask.module.css";

interface NewTaskProps {
  onAddNewTask: (content: string) => void;
}
export function NewTask({ onAddNewTask }: NewTaskProps) {
  const [newTaskText, setNewTaskText] = useState("");

  const isNewTaskEmpty = newTaskText.length === 0;

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity("");
    setNewTaskText(event.target.value);
  }

  function handleNewTaskInvalid(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity("Esse campo é obrigatório");
  }

  function handleAddNewTask(event: FormEvent) {
    event.preventDefault();

    onAddNewTask(newTaskText);
    setNewTaskText("");
    console.log(newTaskText);
  }

  return (
    <form className={styles.newtask}>
      <input
        type="text"
        name="task"
        placeholder="Adicione uma nova tarefa"
        onChange={handleNewTaskChange}
        onInvalid={handleNewTaskInvalid}
        value={newTaskText}
        required
      />
      <button
        type="submit"
        onClick={handleAddNewTask}
        disabled={isNewTaskEmpty}
      >
        Criar{" "}
        <span>
          <PlusCircle size={16} weight="bold" />
        </span>
      </button>
    </form>
  );
}
