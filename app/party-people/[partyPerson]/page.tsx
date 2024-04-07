"use client";

import { useState, useEffect } from "react";
import { Ranking } from "./Ranking";
import { getPeopleFromAirtable, getRecordsFromAirtable } from "@/app/apiCalls";
import { type AirtableRecord, type AirtablePerson } from "@/app/types/airtable";

type Params = { partyPerson: string };
type Props = {
  params: Params;
};

export default function PartyPersonPage({ params }: Props) {
  const [records, setRecords] = useState<AirtableRecord[] | null>(null);
  const [people, setPeople] = useState<AirtablePerson[] | null>(null);

  useEffect(() => {
    getPeopleFromAirtable().then((people) => setPeople(people));
    getRecordsFromAirtable().then((records) => setRecords(records));
  }, []);

  if (!records) {
    return null;
  }

  if (!people) {
    return null;
  }

  const person = people.find((person) => person.id === params.partyPerson);

  if (!person) {
    return (
      <>
        <div className="text-3xl font-bold">
          Error: Unknown party person {params.partyPerson}
        </div>
      </>
    );
  }

  return (
    <>
      <div className="mb-8 flex flex-col items-center">
        <div className="text-3xl font-bold">{person.name}'s picks</div>
      </div>
      <Ranking records={records} person={person} />
    </>
  );
}
