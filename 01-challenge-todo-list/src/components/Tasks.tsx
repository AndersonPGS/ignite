import { useState } from "react";
import { NewTask } from "./NewTask";
import { Task } from "./Task";
import styles from "./Tasks.module.css";

import { v4 as uuidv4 } from "uuid";

export function Tasks() {
  const [tasks, setTasks] = useState([
    {
      id: uuidv4(),
      content:
        "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
      isDone: true,
    },
    {
      id: uuidv4(),
      content: "Terminar o ToDo e partir para o proximo nível",
      isDone: false,
    },
    {
      id: uuidv4(),
      content: "Fazer o almoço para não morrer de fome",
      isDone: true,
    },
    {
      id: uuidv4(),
      content: "Alimentar o cachorro",
      isDone: true,
    },
    {
      id: uuidv4(),
      content: "Estudar NodeJS",
      isDone: false,
    },
    {
      id: uuidv4(),
      content: "Estudar Python",
      isDone: false,
    },
  ]);

  let allTasks = tasks.length;

  let doneTasks = tasks.filter((task) => {
    return task.isDone === true;
  }).length;

  function deleteTask(taskToDelete: string) {
    const tasksWithoutDeletedTask = tasks.filter((task) => {
      return task.id !== taskToDelete;
    });

    setTasks(tasksWithoutDeletedTask);
  }

  function addTask(content: string) {
    const newtask = {
      id: uuidv4(),
      content,
      isDone: false,
    };

    setTasks([...tasks, newtask]);
  }

  function checkDoneTask(taskToCheckDone: string) {
    const newTasksArr = tasks.map((item) => {
      if (item.id === taskToCheckDone) {
        return { id: item.id, content: item.content, isDone: !item.isDone };
      } else {
        return item;
      }
    });
    setTasks(newTasksArr);
  }

  return (
    <>
      <NewTask onAddNewTask={addTask} />
      <div className={styles.tasks}>
        <div className={styles.info}>
          <div className={styles.created}>
            Tarefas criadas <span>{allTasks}</span>
          </div>
          <div className={styles.done}>
            Concluídas{" "}
            <span>
              {doneTasks} de {allTasks}
            </span>
          </div>
        </div>

        {tasks.map((task) => {
          return (
            <Task
              key={task.id}
              id={task.id}
              content={task.content}
              isDone={task.isDone}
              onDeleteTask={deleteTask}
              onCheckTask={checkDoneTask}
            />
          );
        })}
      </div>
    </>
  );
}
