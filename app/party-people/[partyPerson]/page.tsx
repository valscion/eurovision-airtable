"use client";

import { use } from "react";
import { Ranking } from "./Ranking";
import { getPeopleFromAirtable, getRecordsFromAirtable } from "@/app/apiCalls";

type Params = { partyPerson: string };
type Props = {
  params: Params;
};

export default function PartyPersonPage({ params }: Props) {
  const records = use(
    getRecordsFromAirtable({
      rootUrl: location.origin,
    })
  );
  const people = use(
    getPeopleFromAirtable({
      rootUrl: location.origin,
    })
  );
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
