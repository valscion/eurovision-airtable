import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

// This list of people should be actual people who will
// attend the eurovision party
const people = [
  { name: "Måns", id: "abc" },
  { name: "Abba", id: "def" },
  { name: "Måneskin", id: "i342" },
  { name: "Loreen", id: "sdk" },
  { name: "Lordi", id: "23784" },
  { name: "Käärijä", id: "aslkf" },
  { name: "Tix", id: "ogiu" },
  { name: "The Roop", id: "dkhjg" },
].sort((a, b) => a.name.localeCompare(b.name));

export default function Home() {
  return (
    <>
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
    </>
  );
}
