import { Lobster } from "next/font/google";
import "./globals.css";
import styles from "./layout.module.css";

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
        <div className={styles.appWrapper}>
          <div className={styles.hero}>
            <h1 className={`${lobster.className} ${styles.heading}`}>
              Viisukatsomo
            </h1>
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
