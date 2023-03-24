import Link from "next/link";
import styles from "./page.module.css";
import { getPeopleFromAirtable } from "./apiCalls";

export default async function Home() {
  const people = await getPeopleFromAirtable({
    rootUrl: `http://127.0.0.1:${process.env.PORT || 3000}`,
  });

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
