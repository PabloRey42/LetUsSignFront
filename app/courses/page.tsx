const courses = [
  {
    title: "Droit des affaires",
    professor: "Mme Dupont",
    schedule: "Lundi · 10h00 - 12h00",
    room: "Salle B210",
    status: "Présentiel"
  },
  {
    title: "Gestion de projet",
    professor: "M. Bernard",
    schedule: "Mardi · 14h00 - 16h00",
    room: "Salle C105",
    status: "Hybride"
  },
  {
    title: "Marketing digital",
    professor: "Mme Roy",
    schedule: "Jeudi · 9h00 - 11h00",
    room: "Amphi 2",
    status: "Présentiel"
  },
  {
    title: "Finance d'entreprise",
    professor: "M. Langlois",
    schedule: "Vendredi · 13h30 - 15h30",
    room: "Salle B110",
    status: "Distanciel"
  }
];

export const metadata = {
  title: "Cours"
};

export default function CoursesPage() {
  return (
    <div className="app__container section">
      <header className="section__header">
        <h1 className="section__title">Planning des cours</h1>
        <p className="section__text">
          Consultez vos séances programmées et retrouvez les informations pratiques : horaires, salles, modalités.
        </p>
      </header>
      <div className="table-wrapper">
        <table className="table">
          <thead>
            <tr>
              <th>Cours</th>
              <th>Professeur</th>
              <th>Horaires</th>
              <th>Salle</th>
              <th>Modalité</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course) => (
              <tr key={course.title}>
                <td>{course.title}</td>
                <td>{course.professor}</td>
                <td>{course.schedule}</td>
                <td>{course.room}</td>
                <td>
                  <span className="badge">{course.status}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

