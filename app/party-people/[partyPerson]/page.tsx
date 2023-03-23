import { type AirtableRecord } from "@/app/types/airtable";
import { Ranking } from "./Ranking";
import { getPeopleFromAirtable } from "@/app/apiCalls";

type Params = { partyPerson: string };
type Props = {
  params: Params;
};

async function getRecordsFromAirtable(): Promise<AirtableRecord[]> {
  const res = await fetch("http://localhost:3000/api/airtable-party-person", {
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

export default async function PartyPersonPage({ params }: Props) {
  const records = await getRecordsFromAirtable();
  const people = await getPeopleFromAirtable();
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
