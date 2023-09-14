export function ButtonA({ isOpenForm, onOpenForm }) {
  return (
    <button
      className={`button ${isOpenForm ? "close" : ""}`}
      onClick={(e) => onOpenForm()}
    >
      {!isOpenForm ? "Agregar" : `Agregar X`}
    </button>
  );
}
