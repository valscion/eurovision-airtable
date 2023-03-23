import Airtable from "airtable";
import { AirtableUpdateRecordPayload } from "@/app/types/airtable";

export async function PUT(request: Request) {
  const airtable = new Airtable({
    apiKey: process.env.AIRTABLE_API_KEY,
  });
  // The Airtable base where all data lives in
  const baseId = "appZo5EslvhMHndic";
  // The table ID which contains the wanted stuff
  const tableId = "tbloo3DrzmMKRTrQX";

  // We assume that incoming request contains the payload in the expected format here.
  const updatePayload: AirtableUpdateRecordPayload[] = await request.json();

  // Airtable allows updating at max 10 records in same request so we must split the payload
  // to buckets of max 10.
  const bucketedUpdatePayloads = updatePayload.reduce(
    (acc, singlePayload, index) => {
      const bucketId = Math.floor(index / 10);
      acc[bucketId] ||= [];
      acc[bucketId].push(singlePayload);
      return acc;
    },
    [] as AirtableUpdateRecordPayload[][]
  );

  let airtableRequestPromises = [];

  for (const bucket of bucketedUpdatePayloads) {
    const airtableFormat = bucket.map((item) => ({
      id: item.recordId,
      fields: {
        // When we want to clear a selection from a singleSelect item,
        // we can set the item to `null`. However, the types provided by airtable
        // package enforce all fields to be strings or it causes a type error.
        //
        // So we must tell TypeScript here that `null` is a string to appease
        // the types provided inside Airtable. Yuck.
        [item.field]: item.choiceId as string,
      },
    }));
    // Push the request promises to an array so they happen in parallel
    airtableRequestPromises.push(
      airtable.base(baseId).table(tableId).update(airtableFormat)
    );
  }

  // And now we wait for all parallel requests to complete.
  await Promise.all(airtableRequestPromises);

  return new Response(JSON.stringify({ message: "All good" }), {
    headers: {
      "content-type": "application/json",
    },
  });
}
