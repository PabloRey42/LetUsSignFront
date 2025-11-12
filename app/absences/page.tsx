const absences = [
  {
    course: "Stratégie d'entreprise",
    date: "22 février 2025",
    professor: "Mme Girard",
    duration: "2h",
    status: "Justifiée",
    justification: "Certificat médical transmis"
  },
  {
    course: "Anglais professionnel",
    date: "4 mars 2025",
    professor: "M. Evans",
    duration: "1h30",
    status: "En attente",
    justification: "Document à fournir"
  },
  {
    course: "Innovation produit",
    date: "18 mars 2025",
    professor: "Mme Pereira",
    duration: "2h",
    status: "Justifiée",
    justification: "Déplacement pédagogique"
  }
];

export const metadata = {
  title: "Absences"
};

export default function AbsencesPage() {
  return (
    <div className="app__container section">
      <header className="section__header">
        <h1 className="section__title">Suivi des absences</h1>
        <p className="section__text">
          Visualisez l&apos;historique de vos absences et suivez l&apos;état des justificatifs envoyés.
        </p>
      </header>
      <div className="table-wrapper">
        <table className="table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Cours</th>
              <th>Professeur</th>
              <th>Durée</th>
              <th>Statut</th>
              <th>Justificatif</th>
            </tr>
          </thead>
          <tbody>
            {absences.map((absence) => (
              <tr key={`${absence.course}-${absence.date}`}>
                <td>{absence.date}</td>
                <td>{absence.course}</td>
                <td>{absence.professor}</td>
                <td>{absence.duration}</td>
                <td>
                  <span
                    className={`badge badge--${absence.status === "Justifiée" ? "success" : "warning"}`}
                  >
                    {absence.status}
                  </span>
                </td>
                <td>{absence.justification}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

