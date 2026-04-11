import React from "react";

export default function SparkleNavbar({
  items,
  activeItem,
  onItemClick,
  color = "#22d3ee",
}) {
  return (
    <nav className="relative">
      <ul className="flex items-center gap-10 text-gray-300 font-medium">

        {items.map((item) => (
          <li key={item}>
            <button
              onClick={() => onItemClick(item)}
              className="relative group transition duration-300"
            >
              {/* TEXT */}
              <span
                className={`px-2 transition ${
                  activeItem === item
                    ? "text-white"
                    : "hover:text-white"
                }`}
              >
                {item}
              </span>

              {/* ✅ CENTERED UNDERLINE (FIXED) */}
              {activeItem === item && (
                <span
                  className="absolute -bottom-1 left-1/2 -translate-x-1/2 h-[2px] w-6 rounded-full transition-all duration-300"
                  style={{
                    background: color,
                    boxShadow: `0 0 8px ${color}`,
                  }}
                ></span>
              )}

              {/* OPTIONAL HOVER GLOW */}
              <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 blur-md"
                style={{
                  background: color,
                }}
              ></span>
            </button>
          </li>
        ))}

      </ul>
    </nav>
  );
}