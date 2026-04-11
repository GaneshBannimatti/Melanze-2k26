import { useParams } from "react-router-dom";

const eventData = {
  "tech-byte": {
    title: "Tech Byte",
    date: "April 25 & 26, 2026",
    fee: "₹100 / team",
    prize: "Exclusive Prizes + Certificates",
    rules: [
      "Team of 2 members",
      "Bring your own laptop",
      "One team per participant",
    ],
    coordinators: [
      "Malatesh – 8296256433",
      "Rakshita – 6366184580",
    ],
    link: "https://tinyurl.com/GAMEATHON-1-O",
  },

  "lagori": {
    title: "Logic Ladder",
    date: "April 25 & 26, 2026",
    fee: "₹100 / team",
    prize: "Certificates + Prizes",
    rules: [
      "Team of 3",
      "3 chances",
      "Puzzle round if tie",
    ],
    coordinators: [
      "Akshay – 9620584272",
      "Aditya – 8073863536",
    ],
    link: "https://tinyurl.com/L3-Lagori-Logic-Ladder",
  },

  "electroeye": {
    title: "Electro Eye",
    date: "April 24, 2026",
    fee: "₹150 / team",
    prize: "Certificates + Prizes",
    rules: [
      "3 members max",
      "5 rounds",
      "Quiz + circuit",
    ],
    coordinators: [
      "Naveen – 9380625868",
    ],
    link: "https://forms.gle/vmGuoEzceMHgfQig9",
  },

  "triple-trio": {
    title: "Triple Trio",
    date: "April 25, 2026",
    fee: "₹199 / team",
    prize: "Prizes + Certificates",
    rules: [
      "4 members max",
      "3 rounds",
    ],
    coordinators: [
      "Chetan – 7411411643",
    ],
    link: "https://forms.gle/XTRaPNSr9DqnS8z2A",
  },

  "tech-puzzle": {
    title: "Tech Puzzle",
    date: "April 2026",
    fee: "₹100",
    prize: "Certificates",
    rules: ["2 participants", "No mobile"],
    coordinators: ["Yeshwanth"],
  },

  "mini-cricket": {
    title: "Mini Cricket",
    date: "April 2026",
    fee: "₹360",
    prize: "Exciting prizes",
    rules: ["6 players", "5 overs"],
    coordinators: ["Gopal"],
  },

  // ✅ NEW EVENTS

  "blind-coding": {
    title: "Blind Coding",
    date: "April 25, 2026",
    fee: "₹250 / team",
    prize: "Exclusive Prizes + Certificates",
    rules: [
      "Max 2 members",
      "AI prompt-based challenge",
      "Landing page creation",
    ],
    coordinators: [
      "Vijay – 7795099859",
      "Radha – 8277803043",
    ],
    link: "https://docs.google.com/forms/d/e/1FAIpQLSe7MILMc9kZs51WpKj4sNH-D4LKii7nfyMatLgzK9CpSv399A/viewform",
  },

  "scan-seek": {
    title: "Scan and Seek",
    date: "April 25, 2026",
    fee: "₹250 / team",
    prize: "Certificates + Prizes",
    rules: [
      "2–4 members",
      "QR hunt",
      "Treasure challenge",
    ],
    coordinators: [
      "Vishwa – 8431487492",
    ],
    link: "https://forms.gle/YZgZN8fEWEndEuqp8",
  },
};

export default function EventDetails() {
  const { id } = useParams();
  const event = eventData[id];

  if (!event) {
    return <h1 className="text-white text-center mt-20">Event Not Found</h1>;
  }

  return (
    <section className="min-h-screen px-4 py-20 text-white text-center">

      <h1 className="text-4xl font-bold text-cyan-400 mb-6">
        {event.title}
      </h1>

      <p className="mb-4">{event.date}</p>

      <div className="max-w-2xl mx-auto bg-white/10 p-6 rounded-xl">

        <p><strong>Fee:</strong> {event.fee}</p>
        <p><strong>Prize:</strong> {event.prize}</p>

        <ul className="text-left mt-4">
          {event.rules.map((r, i) => <li key={i}>• {r}</li>)}
        </ul>

        <div className="mt-4">
          {event.coordinators.map((c, i) => (
            <p key={i}>{c}</p>
          ))}
        </div>

        {event.link && (
          <a href={event.link} target="_blank" className="mt-6 inline-block bg-cyan-400 px-4 py-2 rounded text-black">
            Register
          </a>
        )}

      </div>
    </section>
  );
}