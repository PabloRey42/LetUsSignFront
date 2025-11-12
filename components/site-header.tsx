import Link from "next/link";

const links = [
  { href: "/", label: "Tableau de bord" },
  { href: "/courses", label: "Cours" },
  { href: "/absences", label: "Absences" },
  { href: "/about", label: "À propos" }
];

export function SiteHeader() {
  return (
    <header className="app__header">
      <div className="app__container app__header-content">
        <Link href="/" className="brand">
          LetUsSign
        </Link>
        <nav className="nav">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="nav__link">
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

