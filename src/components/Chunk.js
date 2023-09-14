import { useState } from "react";

export function Chunk({ task, category, onDeleteCategory, children }) {
  const [isOpenCategory, setOpenCategory] = useState(null);

  function handleOpen() {
    setOpenCategory(!isOpenCategory);
  }

  const categoryTotal = task.tareas.reduce(
    (total, tarea) => total + tarea.duration,
    0
  );
  const allCompleted = task.tareas.every((tarea) => tarea.finished);

  return (
    <div className="chunk">
      <div className="chunk__title" onClick={(e) => handleOpen()}>
        <h3 style={{ textTransform: "uppercase" }}>{category}</h3>
        <span
          className={`chunk__completed ${
            allCompleted && task.tareas.length > 0 ? "" : "hidden"
          }`}
        >
          COMPLETADO
        </span>
        <span> {categoryTotal}h</span>
        <span className="chunk_icon">{isOpenCategory ? "-" : "+"}</span>
      </div>

      {isOpenCategory && (
        <>
          {children}
          <button
            className="button delete__category"
            onClick={() => onDeleteCategory(task.id)}
          >
            Borrar categoría
          </button>
        </>
      )}
    </div>
  );
}
