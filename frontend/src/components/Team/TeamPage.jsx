import { useState } from "react";
import TeamTabs from "./TeamTabs";
import TeamGrid from "./TeamGrid";

import frame47 from "../../assets/images/frame47.png";


const TEAM_DATA = [
  {
    id: 1,
    name: "Vikram Sudhakar",
    role: "President",
    year: "core",
    image: frame47
  },
  {
    id: 2,
    name: "Vikram Sudhakar",
    role: "President",
    year: "4th",
    image: frame47
  },
  {
    id: 3,
    name: "Vikram Sudhakar",
    role: "President",
    year: "core",
    image: frame47
  },
  {
    id: 4,
    name: "Vikram Sudhakar",
    role: "President",
    year: "core",
    image: frame47
  },
  {
    id: 5,
    name: "Vikram Sudhakar",
    role: "President",
    year: "core",
    image: frame47
  }
];

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

