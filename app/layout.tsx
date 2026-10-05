import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Axel Boulanger | Portfolio",
  description:
    "Portfolio d’Axel Boulanger, étudiant en informatique : projets, compétences et recherche de stage ou d’alternance.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fr" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
