import { useState } from "react";
import { NewTask } from "./NewTask";
import { Task } from "./Task";
import styles from "./Tasks.module.css";

import { v4 as uuidv4 } from "uuid";
import { EmptyTask } from "./EmptyTask";

export function Tasks() {
  const [tasks, setTasks] = useState([
    {
      id: uuidv4(),
      content:
        "Conseguir uma vaga para trabalhar com desenvolvimento Front End na @Rocketseat ❤️",
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

          {allTasks > 0 ? (
            <div className={styles.done}>
              Concluídas{" "}
              <span>
                {doneTasks} de {allTasks}
              </span>
            </div>
          ) : (
            ""
          )}
        </div>

        {allTasks > 0 ? (
          tasks.map((task) => {
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
          })
        ) : (
          <EmptyTask />
        )}
      </div>
    </>
  );
}
