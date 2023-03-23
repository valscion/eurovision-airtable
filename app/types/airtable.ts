export type AirtableRecord = {
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

export type AirtablePerson = {
  id: string;
  name: string;
  options: Array<{ id: string; name: string }>;
};

export type AirtableUpdateRecordPayload = {
  recordId: string;
  field: string;
  choiceId: string | null;
};
