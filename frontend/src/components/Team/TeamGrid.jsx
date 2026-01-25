import TeamCard from "./TeamCard";

export default function TeamGrid({ members }) {
  return (
    <div className="grid !grid-cols-4 sm:grid-cols-2 lg:grid-cols-3  gap-y-10 justify-center w-full">
      {members.map(m => (
        <TeamCard key={m.id} member={m} />
      ))}
    </div>
  );
}
