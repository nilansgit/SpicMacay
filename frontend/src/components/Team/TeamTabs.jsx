const TABS = [
  { key: "core", label: "Core" },
  // { key: "4th", label: "4th Year" },
  // { key: "3rd", label: "3rd Year" },
  // { key: "2nd", label: "2nd Year" },
  // { key: "1st", label: "1st Year" },
];

export default function TeamTabs({ active, setActive }) {
  return (
    <div className="flex flex-wrap gap-10 !mb-14 justify-start">
      {TABS.map(tab => (
        <button
          key={tab.key}
          onClick={() => setActive(tab.key)}
          className={`
            !px-4 !py-2 rounded-xl border-2 transition-all duration-200
            text-xl font-extrabold macondo-regular 
            ${
              active === tab.key
                ? "bg-[#9c2f10] text-[#f7e3bd] border-[#9c2f10]"
                : "bg-[#f3d7a6]/80 text-[#5a2f0d] border-[#c9a464] hover:bg-[#ecd09c]"
            }
          `}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
