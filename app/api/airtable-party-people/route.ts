import Airtable from "airtable";

// A good enough type for our uses
// Copied from https://airtable.com/developers/web/api/model/table-model and the links leading to that

type FieldType =
  | "singleLineText"
  | "email"
  | "url"
  | "multilineText"
  | "number"
  | "percent"
  | "currency"
  | "singleSelect"
  | "multipleSelects"
  | "singleCollaborator"
  | "multipleCollaborators"
  | "multipleRecordLinks"
  | "date"
  | "dateTime"
  | "phoneNumber"
  | "multipleAttachments"
  | "checkbox"
  | "formula"
  | "createdTime"
  | "rollup"
  | "count"
  | "lookup"
  | "multipleLookupValues"
  | "autoNumber"
  | "barcode"
  | "rating"
  | "richText"
  | "duration"
  | "lastModifiedTime"
  | "button"
  | "createdBy"
  | "lastModifiedBy"
  | "externalSyncSource";

type TableField = {
  id: string;
  type?: FieldType;
  name: string;
  description?: string;
};

type TableSchema = {
  id: string;
  /** The first column in the table and every view. */
  primaryFieldId: string;

  name: string;
  description?: string;

  fields: Array<TableField>;
};

export async function GET(request: Request) {
  const airtable = new Airtable({
    apiKey: process.env.AIRTABLE_API_KEY,
  });
  // The Airtable base where all data lives in
  const baseId = "appZo5EslvhMHndic";
  // The table ID which contains the wanted stuff
  const tableId = "tbloo3DrzmMKRTrQX";

  // Call directly to Airtable Meta API to get the table schema.
  // We must use the meta API as otherwise we would not get field names
  // for the columns which don't have any data in them.
  //
  // https://airtable.com/developers/web/api/get-base-schema
  const baseSchema = await airtable.base("meta").makeRequest({
    path: `/bases/${baseId}/tables`,
  });
  const tableSchema: TableSchema = baseSchema.body.tables.find(
    (table: any) => table.id === tableId
  );
  if (!tableSchema) {
    throw new Error("Table was not found, meta request seems to be broken");
  }

  const people = tableSchema.fields
    // Only party people columns use the singleSelect type
    .filter((field) => field.type === "singleSelect")
    .map((field) => ({
      id: field.id,
      name: field.name,
    }));

  return new Response(JSON.stringify(people), {
    headers: {
      "content-type": "application/json",
    },
  });
}
