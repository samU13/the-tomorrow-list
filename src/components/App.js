import { useState } from "react";
import { Free } from "./Free";
import { List } from "./List";
import { Header } from "./Header";
import { Chunk } from "./Chunk";
import { AddFrom } from "./AddFrom";
import { ChunkList } from "./ChunkList";

//ACABAR ORDENAR LISTAS

const initialTasks = [
  {
    id: 1,
    categoria: "general",
    tareas: [
      { id: 1, description: "Ir a la compra", duration: 1, finished: false },
      { id: 2, description: "Ir al medico", duration: 2, finished: false },
    ],
  },
  {
    id: 2,
    categoria: "estudios",
    tareas: [
      { id: 4, description: "Estudiar React", duration: 6, finished: true },
      { id: 5, description: "Estudiar CSS", duration: 2, finished: false },
    ],
  },
  {
    id: 3,
    categoria: "deporte",
    tareas: [
      { id: 6, description: "Ir a caminar", duration: 2, finished: false },
      { id: 7, description: "Ir a la piscina", duration: 3, finished: false },
    ],
  },
];

export default function App() {
  const [tasks, setTasks] = useState(initialTasks);

  const totalHoras = tasks
    .flatMap((i) => i.tareas)
    .reduce((total, tareas) => total + tareas.duration, 0);

  function handleCategoryAdd(category) {
    setTasks((prevTasks) => [...prevTasks, category]);
  }
  function handleCategoryDelete(categoryId) {
    setTasks((prevTasks) =>
      prevTasks.filter((category) => category.id !== categoryId)
    );
  }

  function handleTaskAdd(task, id) {
    setTasks((prevTasks) =>
      prevTasks.map((category) =>
        category.id === id
          ? { ...category, tareas: [...category.tareas, task] }
          : category
      )
    );
  }

  function handleTaskDelete(categoryId, taskId) {
    setTasks((prevTasks) =>
      prevTasks.map((category) =>
        category.id === categoryId
          ? {
              ...category,
              tareas: category.tareas.filter((task) => task.id !== taskId),
            }
          : category
      )
    );
  }
  function handleFinishedToggle(categoryId, taskId) {
    setTasks((prevTasks) =>
      prevTasks.map((category) =>
        category.id === categoryId
          ? {
              ...category,
              tareas: category.tareas.map((task) =>
                task.id === taskId
                  ? { ...task, finished: !task.finished }
                  : task
              ),
            }
          : category
      )
    );
  }

  return (
    <div className="app">
      <Header />
      <List tasks={tasks} onAddCategory={handleCategoryAdd}>
        {tasks.map((task) => (
          <Chunk
            category={task.categoria}
            task={task}
            onDeleteCategory={handleCategoryDelete}
            key={task.categoria}
          >
            <ChunkList
              task={task}
              onDeleteTask={handleTaskDelete}
              onFinishedToggle={handleFinishedToggle}
            />
            <AddFrom task={task} onAddTasks={handleTaskAdd} />
          </Chunk>
        ))}
      </List>
      <Free totalHoras={totalHoras} />
    </div>
  );
}
