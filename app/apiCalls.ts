import {
  AirtablePerson,
  AirtableRecord,
  AirtableUpdateRecordPayload,
} from "./types/airtable";

export async function getPeopleFromAirtable(): Promise<AirtablePerson[]> {
  const rootUrl = location.origin;
  const res = await fetch(`${rootUrl}/api/airtable-party-people`);
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export async function getRecordsFromAirtable(): Promise<AirtableRecord[]> {
  const rootUrl = location.origin;
  const res = await fetch(`${rootUrl}/api/airtable-party-person`, {
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

export async function updateRecordVotes({
  updates,
}: {
  updates: AirtableUpdateRecordPayload[];
}): Promise<void> {
  const rootUrl = location.origin;
  const res = await fetch(`${rootUrl}/api/airtable-update-items`, {
    method: "PUT",
    body: JSON.stringify(updates),
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to update votes");
  }
}
