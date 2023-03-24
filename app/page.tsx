"use server";

import { Suspense } from "react";
import styles from "./page.module.css";
import { PeopleList } from "./PeopleList";

export default async function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className={styles.whoHeading}>Who are you?</h2>
      <Suspense>
        <PeopleList />
      </Suspense>
    </div>
  );
}
