import EventCard from "./EventCard";
import { useNavigate } from "react-router-dom";

export default function Themes() {
  const navigate = useNavigate();

  const events = [
    { id: "tech-byte", title: "Tech Byte", img: "/events/cse1.jpg" },
    { id: "lagori", title: "Logic Ladder", img: "/events/cse2.jpg" },
    { id: "electroeye", title: "Electro Eye", img: "/events/eee1.jpg" },
    { id: "triple-trio", title: "Triple Trio", img: "/events/eee2.jpg" },
    { id: "tech-puzzle", title: "Tech Puzzle", img: "/events/mech1.jpg" },
    { id: "mini-cricket", title: "Mini Cricket", img: "/events/mech2.jpg" },
  ];

  return (
    <section id="events" className="py-20 px-4">
      <h2 className="text-3xl text-center mb-10 text-white">Events</h2>

      <div className="grid md:grid-cols-3 gap-6">
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