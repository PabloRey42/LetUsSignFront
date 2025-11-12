import "./globals.css";
import type { Metadata } from "next";
import { ReactNode } from "react";
import { SiteFooter } from "../components/site-footer";
import { SiteHeader } from "../components/site-header";

export const metadata: Metadata = {
  title: {
    default: "LetUsSign",
    template: "%s · LetUsSign"
  },
  description: "Interface web LetUsSign — solution de signature électronique."
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="fr">
      <body>
        <div className="app">
          <SiteHeader />
          <main className="app__main">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}

