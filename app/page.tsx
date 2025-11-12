type Metric = {
  label: string;
  value: string;
  trend?: string;
};

type GradeRow = {
  course: string;
  professor: string;
  note: string;
  coefficient: number;
  status: "validé" | "en attente" | "rattrapage";
};

const metrics: Metric[] = [
  { label: "Moyenne générale", value: "15,4 / 20", trend: "+0,6 vs trimestre 1" },
  { label: "Cours suivis", value: "42", trend: "6 cette semaine" },
  { label: "Absences", value: "2", trend: "Dont 1 justifiée" },
  { label: "Examens à venir", value: "3", trend: "Prochain : 12 mai" }
];

const grades: GradeRow[] = [
  {
    course: "Droit des affaires",
    professor: "Mme Dupont",
    note: "16,5",
    coefficient: 3,
    status: "validé"
  },
  {
    course: "Gestion de projet",
    professor: "M. Bernard",
    note: "14,8",
    coefficient: 2,
    status: "validé"
  },
  {
    course: "Communication",
    professor: "Mme Leroy",
    note: "13,2",
    coefficient: 1,
    status: "en attente"
  },
  {
    course: "Finance",
    professor: "M. Langlois",
    note: "11,9",
    coefficient: 2,
    status: "rattrapage"
  }
];

const upcomingCourses = [
  { title: "Atelier UX Design", date: "Mardi 9 avril · 14h00", room: "Salle B302" },
  { title: "Marketing digital", date: "Jeudi 11 avril · 9h00", room: "Amphi 4" },
  { title: "Séminaire innovation", date: "Vendredi 12 avril · 10h30", room: "Salle C210" }
];

const absenceSummary = [
  { date: "22 février", course: "Stratégie d'entreprise", status: "Justifiée" },
  { date: "4 mars", course: "Anglais professionnel", status: "À justifier" }
];

export default function HomePage() {
  return (
    <div className="app__container dashboard">
      <header className="dashboard__hero">
        <div>
          <p className="eyebrow">LetUsSign Campus</p>
          <h1 className="hero__title">Bonjour Marie, voici vos informations du jour</h1>
        </div>
        <p className="hero__text">
          Suivez vos cours, notes et absences en un clin d&apos;œil. Toutes les données sont synchronisées avec vos
          signatures de présence Edusign.
        </p>
      </header>

      <section className="metrics">
        {metrics.map((metric) => (
          <article key={metric.label} className="metric-card">
            <p className="metric-card__label">{metric.label}</p>
            <p className="metric-card__value">{metric.value}</p>
            {metric.trend ? <p className="metric-card__trend">{metric.trend}</p> : null}
          </article>
        ))}
      </section>

      <section className="section">
        <header className="section__header">
          <h2 className="section__title">Notes récentes</h2>
          <span className="section__caption">Dernière mise à jour : 2 avril 2025</span>
        </header>
        <div className="table-wrapper">
          <table className="table">
            <thead>
              <tr>
                <th>Cours</th>
                <th>Professeur</th>
                <th>Note</th>
                <th>Coeff.</th>
                <th>Statut</th>
              </tr>
            </thead>
            <tbody>
              {grades.map((grade) => (
                <tr key={grade.course}>
                  <td>{grade.course}</td>
                  <td>{grade.professor}</td>
                  <td>{grade.note}</td>
                  <td>{grade.coefficient}</td>
                  <td>
                    <span className={`status-pill status-pill--${grade.status.replace(" ", "-")}`}>
                      {grade.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="section section--split">
        <div className="panel">
          <header className="section__header">
            <h2 className="section__title">Cours à venir</h2>
            <span className="section__caption">Semaine du 8 avril</span>
          </header>
          <ul className="list">
            {upcomingCourses.map((course) => (
              <li key={course.title} className="list__item">
                <div>
                  <p className="list__item-title">{course.title}</p>
                  <p className="list__item-subtitle">{course.date}</p>
                </div>
                <span className="badge">{course.room}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="panel">
          <header className="section__header">
            <h2 className="section__title">Absences à suivre</h2>
            <span className="section__caption">Gestion administrative</span>
          </header>
          <ul className="list">
            {absenceSummary.map((absence) => (
              <li key={`${absence.course}-${absence.date}`} className="list__item">
                <div>
                  <p className="list__item-title">{absence.course}</p>
                  <p className="list__item-subtitle">{absence.date}</p>
                </div>
                <span
                  className={`badge badge--${absence.status === "Justifiée" ? "success" : "warning"}`}
                >
                  {absence.status}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}

