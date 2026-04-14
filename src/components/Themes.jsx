import EventCard from "./EventCard";
import { useNavigate } from "react-router-dom";

export default function Themes() {
  const navigate = useNavigate();

  const events = [
    { id: "tech-byte", title: "Tech Byte(CSE)", img: "/events/cse1.jpg" },
    { id: "lagori", title: "Lagory Logic Ladder(CSE)", img: "/events/cse2.jpg" },
    { id: "electroeye", title: "Electro Eye Q(EEE)", img: "/events/eee1.jpg" },
    { id: "triple-trio", title: "Triple Trio Arena(EEE)", img: "/events/eee2.jpg" },
    { id: "tech-puzzle", title: "Tech Puzzle(MECH)", img: "/events/mech1.jpg" },
    { id: "mini-cricket", title: "Mini Boundry Cricket(MECH)", img: "/events/mech2.jpg" },

    // ✅ ISE EVENTS
    { id: "blind-coding", title: "Blind Coding (ISE)", img: "/events/ise1.jpg" },
    { id: "scan-seek", title: "Scan & Seek (ISE)", img: "/events/ise2.jpg" },

    // ✅ NEW ECE EVENTS
    { id: "festronics", title: "FESTRONICS (ECE)", img: "/events/ece1.jpg" },
    { id: "roborace", title: "ROBORACE (ECE)", img: "/events/ece2.jpg" },

    // ✅ CULTURAL EVENTS
    { id: "cultural", title: "Cultural Events", img: "/events/cultural.jpg" },
  ];

  return (
    <section id="events" className="py-24 px-4">
      
      <h2 className="text-4xl font-bold text-center mb-14 text-white">
        Events
      </h2>

      <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
        
        {events.map((event) => (
          <EventCard
            key={event.id}
            title={event.title}
            img={event.img}
            onRegister={() => navigate(`/event/${event.id}`)}
          />
        ))}

      </div>
    </section>
  );
}