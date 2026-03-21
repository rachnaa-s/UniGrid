const years = ["2024", "2023", "2022", "2021"];

export default function YearList() {
  return (
    <div className="year-list">
      {years.map((y, i) => (
        <div key={i} className="year-card">
          {y} Papers
        </div>
      ))}
    </div>
  );
}