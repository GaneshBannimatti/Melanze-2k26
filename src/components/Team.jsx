import TeamCarousel from "./TeamCarousel";

export default function Team() {
  const members = [
    {
      id: "1",
      name: "Dr. Parashuram Baraki",
      role: "Principal & Chief Mentor",
      phone: "+91 96860 42385",
      image: "/team/parashuram.jpg",
    },
    {
      id: "2",
      name: "Dr. Girish G Yattinahalli",
      role: "Chief Organizer",
      phone: "+91 9844950991",
      image: "/team/girish.jpg",
    },
    {
      id: "3",
      name: "Dr. Subhas Meti",
      role: "Chief Advisor",
      phone: "+91 9845675725",
      image: "/team/subhash.jpg",
    },
    {
      id: "4",
      name: "Mr. Iranna Makarabbi",
      role: "Chief Coordinator",
      phone: "+91 88677 01426",
      image: "/team/default.jpg",
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
    <section
      id="team"
      className="relative py-24 text-white z-10 px-4 mt-10"
    >
      <h2 className="text-4xl text-center font-bold mb-14">
        Our <span className="text-cyan-400">Team</span>
      </h2>

      <div className="max-w-xl mx-auto">
        <TeamCarousel members={members} />
      </div>
    </section>
  );
}