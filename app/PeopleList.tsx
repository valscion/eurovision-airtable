"use client";

import Link from "next/link";
import styles from "./PeopleList.module.css";
import { getPeopleFromAirtable } from "./apiCalls";
import { use } from "react";

export function PeopleList() {
  const people = use(
    getPeopleFromAirtable({
      rootUrl: location.origin,
    })
  );

  return (
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
  );
}
