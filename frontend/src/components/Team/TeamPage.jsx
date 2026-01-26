import { useState } from "react";
import TeamTabs from "./TeamTabs";
import TeamGrid from "./TeamGrid";
import { TEAM_DATA } from "../../utils /members";

export default function TeamPage() {
  const [activeYear, setActiveYear] = useState("core");

  const filtered = TEAM_DATA.filter(m => m.year === activeYear);

  return (
    <section className="!mt-[6rem] !ml-[5rem]">
      <TeamTabs active={activeYear} setActive={setActiveYear} />
      <TeamGrid members={filtered} />
    </section>
  );
}

