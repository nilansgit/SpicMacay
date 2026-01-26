import bg from "../../assets/images/CompBg.png";
export default function Category({ title, competitions, onSelect }) {
  return (
    <div className="flex justify-center mb-24">
      <div className="relative w-[80%]">

        <img
          src= {bg}
          alt="category scroll"
          className="w-full h-auto"
        />


        <div className="absolute top-[25%] left-[20%] text-[#5a2f0d]">
          <h2 className=" relative text-5xl font-semibold !mb-10 !justify-center ">
            {title}
          </h2>

          <ol className="space-y-2 list-decimal list-inside">
            {competitions.map((c, idx) => (
              <li
                key={idx}
                className="cursor-pointer hover:underline text-3xl"
                onClick={() => onSelect(c)}
              >
                {c.name}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}
