export default function Chat({ params }: { params: { id: string } }) {
  return <div>My Chat: {params.id}</div>;
}
