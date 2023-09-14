import { AddCategory } from "./AddCategory";

export function List({ tasks, onAddCategory, children }) {
  return (
    <div className="list__body">
      <div className="list">{children}</div>
      <AddCategory tasks={tasks} onAddCategory={onAddCategory} />
    </div>
  );
}
