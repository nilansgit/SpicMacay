import { FaLinkedin } from "react-icons/fa";

export default function TeamCard({ member }) {
  return (
    <div className="flex flex-col w-[240px]">
      <div className="overflow-hidden rounded-tr-xl rounded-tl-xl">
        <img
          src={member.image}
          alt={member.name}
          className=" h-[320px] w-[240px] object-cover"
        />
      </div>
      <div
        className="
          bg-[#9c2f10]
          text-[#f7e3bd]
          shadow-[0_10px_25px_rgba(0,0,0,0.35)]
          rounded-bl-xl rounded-br-xl
          !justify-items-center

        "
      >
        <p className="text-2xl font-semibold">{member.name}</p>
        <p className=" text-xl opacity-90 italic">{member.role}</p>
        <div className= "text-md opacity-70 mt-1">
          <a href="https://in.linkedin.com/company/spicmacay-mangalore"
            target="_blank"
            rel="noopener noreferrer"
          ><FaLinkedin/></a>
        </div>
      </div>  
    </div>
  );
}
