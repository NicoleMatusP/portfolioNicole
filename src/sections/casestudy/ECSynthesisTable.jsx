const ECSynthesisTable = ({ data }) => {
  return (
    <div className="synthesis">
      <p className="synthesis__eyebrow">{data.eyebrow}</p>
      <div className="divider" />
      <div className="synthesis__grid">
        {data.columns.map((column) => (
          <div className="synthesis__col" key={column.title}>
            <h4 className="synthesis__title font-display">{column.title}</h4>
            <p className="synthesis__subtitle">{column.subtitle}</p>

            <ul className="synthesis__list">
              {column.rows.map((row) => (
                <li className="synthesis__row" key={row.number}>
                  <span className="synthesis__num font-display">{row.number}</span>
                  <span className="synthesis__label">{row.label}</span>
                  {row.severity && (
                    <span className={`pill ${row.severity === "Crítica" ? "pill--accent" : ""} synthesis__severity`}>
                      {row.severity}
                    </span>
                  )}
                </li>
              ))}
            </ul>

            {column.note && <p className="synthesis__note">{column.note}</p>}
          </div>
        ))}
      </div>
      <div className="synthesis__bar" />
    </div>
  )
}

export default ECSynthesisTable
