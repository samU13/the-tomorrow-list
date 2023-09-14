export function Free({ totalHoras }) {
  const horasLibres = 24 - 7 - totalHoras;
  return (
    <div className="footer">
      <h3>
        {horasLibres < 0
          ? "No hay tantas horas en el dia campeon"
          : `Total horas libres : ${horasLibres}h`}
      </h3>
      <div className="horas__sleep">
        <h3>
          7h de sueño <span>obligatorias</span>
        </h3>
      </div>
    </div>
  );
}
