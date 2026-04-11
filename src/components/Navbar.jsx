import { useEffect, useState } from "react";
import SparkleNavbar from "./SparkleNavbar";
import svmaLogo from "../assets/svma.jpeg";

export default function Navbar() {
  const items = ["Home", "About", "Events", "Team"];

  const [activeItem, setActiveItem] = useState("Home");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // ✅ Smooth Scroll Function
  const scrollToSection = (name) => {
    setMobileOpen(false);

    const id = name.toLowerCase();

    if (id === "home") {
      window.lenis?.scrollTo(0);
      return;
    }

    const el = document.getElementById(id);
    if (!el) return;

    window.lenis?.scrollTo(el, {
      offset: -100,
      duration: 1.2,
    });
  };

  // ✅ Detect Scroll for Navbar Effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ Active Section Tracking
  useEffect(() => {
    const setupObserver = () => {
      const sections = items
        .map((i) => document.getElementById(i.toLowerCase()))
        .filter(Boolean);

      if (sections.length === 0) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const id = entry.target.id;
              setActiveItem(
                id.charAt(0).toUpperCase() + id.slice(1)
              );
            }
          });
        },
        {
          rootMargin: "-40% 0px -50% 0px",
          threshold: 0.1,
        }
      );

      sections.forEach((section) => observer.observe(section));

      return () => observer.disconnect();
    };

    const timeout = setTimeout(setupObserver, 300);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      
      {/* NAVBAR BACKGROUND */}
      <div
        className={`transition-all duration-300 ${
          scrolled ? "bg-black/90 shadow-xl" : "bg-black/70"
        } backdrop-blur-md`}
      >
        {/* CONTAINER */}
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
          
          {/* LOGO */}
          <div className="flex items-center gap-2">
            <img
              src={svmaLogo}
              alt="College Logo"
              className="h-10 w-auto object-contain hover:scale-105 transition"
            />
          </div>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex flex-1 justify-center">
            <SparkleNavbar
              items={items}
              color="#22d3ee"
              onItemClick={scrollToSection}
              activeItem={activeItem}
            />
          </div>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-4">
            
            {/* APPLY BUTTON */}
            <button
              onClick={() => scrollToSection("Events")}
              className="hidden sm:block bg-cyan-400 text-black px-5 py-2 rounded-xl font-semibold hover:bg-cyan-300 transition shadow-md"
            >
              Apply
            </button>

            {/* MOBILE MENU BUTTON */}
            <button
              className="md:hidden text-white text-2xl"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              ☰
            </button>
          </div>

        </div>
      </div>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-lg text-white p-5 border-t border-gray-800">
          <ul className="flex flex-col gap-5 text-center text-lg">

            {items.map((item) => (
              <li key={item}>
                <button
                  onClick={() => scrollToSection(item)}
                  className="w-full hover:text-cyan-400 transition"
                >
                  {item}
                </button>
              </li>
            ))}

            <button
              onClick={() => scrollToSection("Events")}
              className="bg-cyan-400 text-black px-4 py-2 rounded-lg mt-2"
            >
              Apply
            </button>

          </ul>
        </div>
      )}
    </header>
  );
}