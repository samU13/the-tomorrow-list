import { useState } from "react";

export function AddCategory({ tasks, onAddCategory }) {
  const [categoria, setCategoria] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!categoria.trim()) {
      return;
    }
    const newCategoryId =
      tasks.reduce(
        (maxId, category) => (category.id > maxId ? category.id : maxId),
        0
      ) + 1;
    const newCategory = {
      id: newCategoryId,
      categoria: categoria,
      tareas: [],
    };
    onAddCategory(newCategory);
    setCategoria("");
  }
  return (
    <form className="addform form_category" onSubmit={handleSubmit}>
      <input
        className="form__category"
        type="text"
        placeholder="Tu categoria ..."
        value={categoria}
        onChange={(e) => setCategoria(e.target.value)}
      />
      <button className="button add_category">
        <span>+</span> Agregar categoria
      </button>
    </form>
  );
}
