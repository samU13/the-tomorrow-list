export function ChunkList({ task, onDeleteTask, onFinishedToggle }) {
  const handleDelete = (taskId) => {
    onDeleteTask(task.id, taskId);
  };
  const handleCheckboxChange = (taskId) => {
    onFinishedToggle(task.id, taskId); // Llama a la función onFinishedToggle
  };

  return (
    <ul className="chunk__list">
      {task.tareas.map((task) => (
        <li className="chunk__task">
          <input
            type="checkbox"
            checked={task.finished}
            onChange={() => handleCheckboxChange(task.id)}
          />
          <span style={task.finished ? { textDecoration: "line-through" } : {}}>
            {task.description}
          </span>
          <span className="chunk__list__time">{task.duration}h</span>
          <button onClick={() => handleDelete(task.id)}>❌</button>
        </li>
      ))}
    </ul>
  );
}
