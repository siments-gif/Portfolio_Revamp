import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "A showcase of my projects and work.",
  openGraph: {
    title: "My Portfolio",
    description: "A showcase of my projects and work.",
    type: "website",
    url: "https://myportfolio.com",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-gray-100">
        <header className="bg-white shadow-md p-4">
          <div className="container mx-auto">
            <h1 className="text-xl font-bold">My Portfolio</h1>
          </div>
        </header>
        <main className="flex-grow container mx-auto p-4">{children}</main>
        <footer className="bg-gray-800 text-white p-4 text-center">
          <p>© {new Date().getFullYear()} My Portfolio</p>
        </footer>
      </body>
    </html>
  );
}
