import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { ButtonA } from "./ButtonA";

export function AddFrom({ task, onAddTasks }) {
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState("");
  const [isOpenForm, setOpenForm] = useState(false);

  function handleOpenForm() {
    setOpenForm(!isOpenForm);
  }

  function handleSubmit(e) {
    e.preventDefault();

    const durationString = String(duration);

    if (!description.trim() || !durationString.trim()) {
      setOpenForm(false);
      return;
    }
    const id = uuidv4();
    const newTask = { id, description, duration, finished: false };
    onAddTasks(newTask, task.id);
    setDescription("");
    setDuration("");
  }
  return (
    <form
      className="addform"
      onSubmit={!isOpenForm ? handleSubmit : (e) => e.preventDefault()}
    >
      <input
        className={`form__task ${!isOpenForm ? "hidden" : ""}`}
        type="text"
        placeholder="Tu tarea ..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        className={`form__time  ${!isOpenForm ? "hidden" : ""}`}
        type="text"
        placeholder="Tiempo ..."
        value={duration}
        onChange={(e) => setDuration(Number(e.target.value))}
      />
      <ButtonA isOpenForm={isOpenForm} onOpenForm={handleOpenForm} />
    </form>
  );
}
