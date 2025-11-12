export const metadata = {
  title: "À propos"
};

export default function AboutPage() {
  return (
    <div className="app__container section">
      <header className="section__header">
        <h1 className="section__title">À propos de LetUsSign Campus</h1>
        <p className="section__text">
          LetUsSign Campus propose un portail étudiant inspiré d&apos;Edusign pour piloter les présences, les notes et
          la relation pédagogique au quotidien.
        </p>
      </header>
      <div className="panel">
        <h2 className="section__subtitle">Fonctionnalités clés</h2>
        <ul className="list list--bullets">
          <li>Synchronisation automatique avec les feuilles d&apos;émargement LetUsSign.</li>
          <li>Suivi temps réel des cours, absences et justificatifs.</li>
          <li>Visualisation des moyennes et coefficients pour chaque matière.</li>
          <li>Notifications sur les examens et travaux à rendre.</li>
        </ul>
      </div>
    </div>
  );
}

