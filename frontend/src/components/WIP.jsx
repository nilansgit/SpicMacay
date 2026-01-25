export default function UnderConstruction() {
  return (
    <div className="min-h-screen flex flex-col">

      {/* Top Indigo Band (matches header tone) */}
      {/* <div className="h-28 bg-gradient-to-r from-[#2a2359] via-[#332d6d] to-[#2a2359]" /> */}

      {/* Main Parchment Area */}
      <div className="flex-1 flex items-center justify-center bg-[#f3d7a6] px-6">
        <div
          className="
            relative max-w-2xl w-full text-center
            px-10 py-14
            bg-[#f7e3bd]
            border-[3px] border-[#c9a464]
            rounded-xl
            shadow-[0_12px_30px_rgba(0,0,0,0.25)]
          "
        >
          {/* Decorative top line */}
          <div className="absolute top-4 left-1/2 -translate-x-1/2 w-40 h-[2px] bg-[#a57c3b]" />

          {/* Icon */}
          <div className="text-5xl mb-6 text-[#6b3f1d]">🚧</div>

          {/* Heading */}
          <h1 className="text-3xl md:text-4xl font-semibold text-[#5a2f0d] mb-4">
            Page Under Construction
          </h1>

          {/* Description */}
          <p className="text-[#6b3f1d] text-lg leading-relaxed mb-8">
            This section is currently being carefully prepared.
            We appreciate your patience and invite you to return soon.
          </p>

          {/* Bottom Divider */}
          <div className="w-24 h-[2px] mx-auto bg-[#a57c3b] mb-4" />

          {/* Footer text */}
          <span className="text-sm tracking-wide text-[#704214]">
            — Coming Soon —
          </span>
        </div>
      </div>
    </div>
  );
}
