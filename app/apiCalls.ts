import { AirtablePerson } from "./types/airtable";

export async function getPeopleFromAirtable(): Promise<AirtablePerson[]> {
  const res = await fetch("http://localhost:3000/api/airtable-party-people");
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
