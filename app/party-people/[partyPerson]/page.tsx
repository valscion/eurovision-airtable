type Params = { partyPerson: string };
type Props = {
  params: Params;
};

type AirtableItem = {
  /** The ID representing this record in Airtable */
  id: string;
  fields: {
    Country: string;
    Ordinal: number;
    /** Duration is in seconds */
    Duration: number;
    Artist: string;
    Song: string;
    /** Flag is the emoji representation of the country */
    Flag: string;
    "Video type": string;
    YouTube: string;
  };
};

type AirtableData = Array<AirtableItem>;

async function getDataFromAirtable(): Promise<AirtableData> {
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
  const data = await getDataFromAirtable();

  return (
    <>
      <div className="text-3xl font-bold underline">
        PartyPerson: {params.partyPerson}
      </div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  );
}
