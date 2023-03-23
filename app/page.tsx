import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import { AirtablePerson } from "./types/airtable";

async function getPeopleFromAirtable(): Promise<AirtablePerson[]> {
  const res = await fetch("http://localhost:3000/api/airtable-party-people", {
    cache: "no-store",
  });
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Home() {
  const people = await getPeopleFromAirtable();

  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className={styles.whoHeading}>Who are you?</h2>
      <ul className={styles.whoList}>
        {people.map((person, index) => (
          <li key={person.id} className={styles.whoListItem}>
            <Link
              className={index % 2 ? styles.whoLinkEven : styles.whoLinkOdd}
              href={`/party-people/${person.id}`}
            >
              {person.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
