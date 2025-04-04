import Airtable from "airtable";

export async function GET(request: Request) {
  const airtable = new Airtable({
    apiKey: process.env.AIRTABLE_API_KEY,
  });
  // The Airtable base where all data lives in
  const baseId = "appySnnTMCRrRbkDo";
  // The table ID which contains the wanted stuff
  const tableId = "tbl1LBikEbRZeXNEg";

  const result = await airtable
    .base(baseId)
    .table(tableId)
    .select({
      sort: [{ field: "Ordinal", direction: "asc" }],
    })
    .all();

  return new Response(
    JSON.stringify(
      result.map((record) => ({
        fields: record.fields,
        id: record.id,
      }))
    ),
    {
      headers: {
        "content-type": "application/json",
      },
    }
  );
}
