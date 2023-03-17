type Params = { partyPerson: string };
type Props = {
  params: Params;
};

export default function PartyPersonPage({ params }: Props) {
  return <div>PartyPerson: {params.partyPerson}</div>;
}
