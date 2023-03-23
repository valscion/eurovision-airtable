import { type AirtableRecord } from "@/app/types/airtable";
import { Ranking } from "./Ranking";

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

  return (
    <>
      <div className="text-3xl font-bold">
        PartyPerson: {params.partyPerson}
      </div>
      <Ranking records={records} />
    </>
  );
}
