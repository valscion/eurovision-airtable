import Link from "next/link";
import { Lobster } from "next/font/google";
import "./globals.css";

export const metadata = {
  title: "Eurovision Airtable",
  description:
    "Connects React frontend to an Airtable data for local Eurovision party",
};

const lobster = Lobster({ subsets: ["latin"], weight: "400" });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="h-screen">
          <h1
            className={`${lobster.className} px-6 py-12 text-center text-5xl`}
          >
            <Link href="/">Viisukatsomo</Link>
          </h1>
          {children}
        </div>
      </body>
    </html>
  );
}
