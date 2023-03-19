type Params = { partyPerson: string };
type Props = {
  params: Params;
};

export default function PartyPersonPage({ params }: Props) {
  return (
    <div className="text-3xl font-bold underline">
      PartyPerson: {params.partyPerson}
    </div>
  );
}
