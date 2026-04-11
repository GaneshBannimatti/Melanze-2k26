import { useState } from "react";

export default function TeamCarousel({ members }) {
  const [index, setIndex] = useState(0);

  const member = members[index];

  return (
    <div className="flex flex-col items-center text-center">

      {/* IMAGE */}
      <div className="relative group">
        <div className="absolute inset-0 rounded-3xl bg-cyan-400/20 blur-2xl"></div>

        <div className="relative w-[280px] h-[360px] rounded-3xl overflow-hidden shadow-[0_0_40px_rgba(34,211,238,0.4)]">
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* INFO */}
      <h3 className="mt-6 text-xl font-semibold text-cyan-400">
        {member.name}
      </h3>

      <p className="text-gray-300 text-sm">{member.role}</p>
      <p className="text-cyan-300 text-sm">{member.phone}</p>

      {/* BUTTONS */}
      <div className="flex gap-4 mt-6">
        <button
          onClick={() =>
            setIndex((prev) => (prev - 1 + members.length) % members.length)
          }
          className="px-3 py-1 bg-cyan-500/20 rounded"
        >
          ◀
        </button>

        <button
          onClick={() =>
            setIndex((prev) => (prev + 1) % members.length)
          }
          className="px-3 py-1 bg-cyan-500/20 rounded"
        >
          ▶
        </button>
      </div>
    </div>
  );
}