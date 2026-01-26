import { useEffect } from "react";
import bg from "../../assets/images/CompModalBg.png";

export default function Modal({ competition, onClose }) {

  useEffect(() => {
    if (!competition) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow || "auto";
    };
  }, [competition]);

  if (!competition) return null;

  return (
    <div className="fixed inset-0 z-500 bg-black/75 overflow-y-auto">
      
      {/* Centering wrapper */}
      <div className="min-h-screen flex justify-center py-20 px-4">

        {/* Scroll container — HEIGHT IS AUTO */}
        <div
          className="
            relative
            w-full max-w-[720px]
            bg-no-repeat bg-top
            bg-[length:100%_100%]
            text-[#5a2f0d]
          "
          style={{ backgroundImage: `url(${bg})` }}
        >
          {/* Content */}
          <div className="!px-[27%] !py-[20%] !mt-10">
            <h2 className="text-2xl font-semibold mb-4">
              {competition.name}
            </h2>

            <h3 className="font-semibold mb-2">Rules:</h3>

            

            {competition.rules.map(r => (
              <p className="text-lg  whitespace-pre-line mb-10">
                {r}
                <hr />
              </p>
            ))}

            <a
              href={competition.registerLink}
              target="_blank"
              rel="noreferrer"
              className="
                relative
                inline-block
                !mt-6
                !px-4 !py-3
                left-[25%]
                rounded-full
                bg-gradient-to-br from-[#8b2c0f] to-[#b8451e]
                text-[#f7e3bd] text-lg font-semibold
                shadow-[0_6px_18px_rgba(0,0,0,0.35)]
                hover:shadow-[0_8px_24px_rgba(0,0,0,0.45)]
                hover:scale-[1.04]
                transition-all duration-200
                border-2 border-[#6f1f0b]
              "
            >
              Register Now
            </a>


            {/* Bottom spacing so scroll doesn't clash with button */}
            <div className="h-20" />
          </div>

          {/* Close button — part of parchment */}
          <button
            onClick={onClose}
            className="
              relative bottom-[15%] left-[45%]
              bg-[#9c2f10] text-[#f7e3bd]
              !px-4 !py-1 rounded-lg
            "
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
