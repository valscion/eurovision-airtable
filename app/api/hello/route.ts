import Airtable from "airtable";

export async function GET(request: Request) {
  const airtable = new Airtable({
    apiKey: process.env.AIRTABLE_API_KEY,
  });

  const base = airtable.base("appZo5EslvhMHndic");

  const record = await base("Festival Candidates").find("reckYtBqZDhgKjjnP");

  const people = Object.keys(record.fields)
    .filter((fieldName) => fieldName.startsWith("P:"))
    .map((fieldName) => ({
      id: fieldName,
      name: fieldName.slice(2),
    }));
  console.log(`Retrieved ${JSON.stringify(people, null, 2)}`);

  return new Response(JSON.stringify(people), {
    headers: {
      "content-type": "application/json",
    },
  });
}
