import TeamCarousel from "./TeamCarousel";
import FoldSection from "./FoldSection";

export default function Team() {
  const members = [
    // ✅ PRINCIPAL
    {
      id: "1",
      name: "Dr. Parashuram Barak",
      role: "Principal & Chief Mentor",
      phone: "+91 96860 42385",
      image: "/team/parashuram.jpg",
    },

    // ✅ CHIEF ORGANIZER
    {
      id: "2",
      name: "Dr. Girish G Yattinahalli",
      role: "Chief Organizer",
      phone: "+91 9844950991",
      image: "/team/girish.jpg",
    },

    // ✅ CHIEF ADVISOR
    {
      id: "3",
      name: "Dr. Subhas Meti",
      role: "Chief Advisor",
      phone: "+91 9845675725",
      image: "/team/subhash.jpg",
    },

    // ✅ CHIEF COORDINATORS
    {
      id: "4",
      name: "Mr. Iranna Makarabbi",
      role: "Chief Coordinator",
      phone: "+91 88677 01426",
      image: "/team/iranna.jpg",
    },
    {
      id: "5",
      name: "Mrs. Prathima Mahapurush",
      role: "Chief Coordinator",
      phone: "+91 98457 89768",
      image: "/team/prathima.jpg",
    },
    {
      id: "6",
      name: "Mr. Girish Halli",
      role: "Chief Coordinator",
      phone: "+91 99455 64813",
      image: "/team/halli.jpg",
    },
  ];

  return (
    <FoldSection>
      <section
        id="team"
        className="relative py-16 sm:py-24 text-white z-10 px-4"
      >
        <h2 className="text-3xl sm:text-5xl text-center font-bold mb-12 sm:mb-16">
          Our <span className="text-cyan-400">Team</span>
        </h2>

        <div className="max-w-xl mx-auto">
          <TeamCarousel members={members} />
        </div>
      </section>
    </FoldSection>
  );
}