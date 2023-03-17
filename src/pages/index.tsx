import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Lobster } from "next/font/google";
import styles from "@/styles/Home.module.css";

const lobster = Lobster({ subsets: ["latin"], weight: "400" });

// This list of people should be actual people who will
// attend the eurovision party
const people = [
  { name: "Måns", id: 'abc' },
  { name: "Abba", id: 'def' },
  { name: "Måneskin", id: 'i342' },
  { name: "Loreen", id: 'sdk' },
  { name: "Lordi", id: '23784' },
  { name: "Käärijä", id: 'aslkf' },
  { name: "Tix", id: 'ogiu' },
  { name: "The Roop", id: 'dkhjg' },
].sort((a, b) => a.name.localeCompare(b.name));

export default function Home() {
  return (
    <>
      <Head>
        <title>Eurovision Airtable</title>
        <meta name="description" content="Connects React frontend to an Airtable data for local Eurovision party" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.hero}>
        <h1 className={`${lobster.className} ${styles.heading}`}>
          Eurovision Airtable
        </h1>
        <h2 className={styles.whoHeading}>Who are you?</h2>
        <ul className={styles.whoList}>
          {people.map((person, index) => (
            <li key={person.id} className={styles.whoListItem}>
              <Link
                className={index % 2 ? styles.whoLinkEven : styles.whoLinkOdd}
                href="#"
              >
                {person.name}
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}
