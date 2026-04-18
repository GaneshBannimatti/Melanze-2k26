import { useParams } from "react-router-dom";

const eventData = {
  "tech-byte": {
    title: "Tech Byte",
    date: "April 25 & 26, 2026",
    fee: "₹100 / team",
    prize: "Exclusive Prizes + Certificates",

    rules: [
      "Each team must consist of 2 members",
      "Both team members must register on the Gameathon Google form",
      "Team can be inter-departmental and inter-semester (only 2nd & 4th semester)",
      "Each participant can be in only one team",
      "Participants must bring their own laptops, chargers, internet, and required peripherals",
      "No additional devices will be provided",
      "Internet backup must be arranged by participants",
      "Registration amount is non-refundable",
      "Judge's decision is final"
    ],

    coordinators: [
      "Malatesh Y – 8296256433",
      "Rakshita P – 6366184580",
      "Sneha D – 9008340636"
    ],

    staff: [
      "Mr. Nagaraj Baradeli – 9632769295"
    ],

    link: "https://tinyurl.com/GAMEATHON-1-O"
  },

  "lagori": {
    title: "L3 : Lagori Logic Ladder",
    date: "April 25 & 26, 2026",
    fee: "₹100 / team",
    prize: "Exclusive Prizes + Certificates",

    rules: [
      "Team must consist of 3 members",
      "No rash playing or any kind of cheating is allowed",
      "Each team will get 3 chances to play and build the stack",
      "All 3 members can throw the ball and each gets 3 attempts",
      "If match is a draw after 3 chances, puzzle-solving round decides winner",
      "Top 3 teams will play Snake and Ladder for 1st and 2nd positions",
      "Snake and Ladder Rules:",
      "• Players should stand in their respective boxes",
      "• Move according to numbers rolled",
      "• Follow standard game rules",
      "Umpire’s decision is final"
    ],

    coordinators: [
      "Akshay T – 9620584272",
      "Aditya S – 8073863536",
      "Anusha N – 8217854940"
    ],

    staff: [
      "Mr. Nagaraj Baradeli – 9632769295"
    ],

    link: "https://tinyurl.com/L3-Lagori-Logic-Ladder"
  },

  // ✅ ELECTROEYE
  "electroeye": {
    title: "Electroeye Q",
    date: "April 24, 2026",
    fee: "₹150 / team",
    prize: "Exclusive Prizes + Certificates",

    rules: [
      "Maximum 3 members per group",
      "The committee members’ decision is final",
      "Hints will be provided either virtually or offline depending on the round"
    ],

    rounds: [
      "Round 1 – Technical Quiz",
      "Round 2 – Wire Wizard",
      "Round 3 – Circuit Simulation",
      "Round 4 – Technical Treasure Hunt",
      "Round 5 – Build the Circuit"
    ],

    venue: "EEE Final Year Classroom",
    tie: "Tie-breaking task will be conducted between teams",

    coordinators: [
      "Mr. Naveen A – 9380625868",
      "Mr. Aditya H – 9164092286",
      "Ms. Sneha – 8762660480"
    ],

    staff: [
      "Dr. Madhusudan K – 9986056522",
      "Prof. Manjunath Hombal – 9886178019",
      "Prof. Shivalingappa D R – 9606677131"
    ],

    link: "https://forms.gle/vmGuoEzceMHgfQig9",
  },

  // ✅ FULLY UPDATED TRIPLE TRIO
  "triple-trio": {
    title: "Triple Trio Arena",
    date: "April 25, 2026",
    fee: "₹199 / team",
    prize: "Exclusive Prizes + Certificates",

    rules: [
      "Maximum 4 members per group",
      "The committee members’ decision is final",
      "Each round must be completed within the given time limit",
      "Top scoring teams qualify for next round"
    ],

    rounds: [
      "Mini Goal Rush",
      "360° Cricket",
      "Sweet Attack"
    ],

    tie: "Tie-breaking task will be conducted between teams",

    coordinators: [
      "Mr. Chetangouda – 7411411643",
      "Mr. Aakash – 8618341712",
      "Ms. Akshata – 7975375858",
      "Ms. Tejashwini Chavan – 6363241819"
    ],

    staff: [
      "Prof. Manjula Rathod – 9686324386",
      "Prof. Keshav N – 9886644507",
      "Prof. Pratima K – 9449751452"
    ],

    link: "https://forms.gle/XTRaPNSr9DqnS8z2A",
  },

  "tech-puzzle": {
    title: "Technical Puzzle / Guess the Part",
    date: "April 2026",
    fee: "₹100 / team",
    prize: "1st: ₹500 | 2nd: ₹300 | 3rd: ₹200",

    overview: "Participants identify machine/device parts from images and explain their functions.",

    team: [
      "Team of 2 participants"
    ],

    rounds: [
      "Round 1 – Identify the Part (Name only)",
      "Round 2 – Name + Function explanation",
      "Round 3 – Rapid Fire / Buzzer round"
    ],

    format: [
      "Round 1: 10–15 images, 10–15 seconds each",
      "Round 2: 5–8 images with function explanation",
      "Round 3: Quick buzzer-based questions"
    ],

    rules: [
      "Only 2 participants allowed per team",
      "No mobile phones or notes allowed",
      "Answers must be written clearly",
      "No discussion during individual rounds",
      "Judges’ decision is final",
      "Late entries are not allowed",
      "Maintain discipline and silence"
    ],

    scoring: [
      "Round 1: 1 mark per correct name",
      "Round 2: Name (1) + Function (2) = 3 marks",
      "Round 3: 2 marks per correct answer"
    ],

    tie: "Tie-breaker will be conducted with extra questions or fastest answer wins",

    materials: [
      "Printed images or projector",
      "A4 answer sheets",
      "Participants should bring pens"
    ],

    judging: [
      "Accuracy of answers",
      "Clarity of explanation",
      "Time (for tie-breaker)"
    ],

    coordinators: [
      "Yeshwanth D – 8088638569",
      "S Manoj – 9036671530",
      "Chaitanya K – 8088896612",
      "Akash M – 8050290923",
      "Amrutha K – 7483936183",
      "Aishwarya U – 8546924403",
      "Mahantesh B – 7975144624",
      "Manjunath K – 8431340062"
    ],

    association: [
      "Yeshwanth D – 8088638569",
      "S Manoj – 9036671530",
      "Chaitanya K – 8088896612"
    ],

    staff: [
      "Mr. Mukunda D – 9945709175",
      "Mr. Naveenkumar – 9110675451"
    ],
    link: "https://docs.google.com/forms/d/e/1FAIpQLSeZpoYcfqpm1yENoibwUZWi3XydxNbpipi-QpAEK-LC4Gx_cw/viewform?usp=dialog"

  },

  "mini-cricket": {
    title: "Mini Boundary Cricket – Boundary Bash",
    date: "April 2026",
    fee: "₹360 / team",
    prize: "1st: ₹1500 | 2nd: ₹1000 | 3rd: ₹500",

    overview: "A fun, fast-paced street-style cricket game designed for maximum excitement and boundary shots.",

    team: [
      "Each team consists of 6 players (4 boys + 2 girls)",
      "All players must be from the same college",
      "Mixed teams allowed"
    ],

    format: [
      "5-over match (each team bats for 5 overs)",
      "Underarm bowling only",
      "Tennis or soft cricket ball will be used",
      "Only boundary runs (4s) and running runs allowed",
      "No LBW; gully cricket rules apply"
    ],

    field: [
      "Small-sized ground (open ground / parking / quadrangle)",
      "Boundary line = 4 runs",
      "No-hit zone = dot ball",
      "Ball outside playable area = dead ball or out"
    ],

    rules: [
      "Each over has 6 balls, max 2 overs per bowler",
      "Runs scored through boundaries and running",
      "Overarm bowling not allowed",
      "Batsman out if bowled, caught, run out, or hits outside area",
      "Tie resolved by super over or most boundaries",
      "Umpire’s decision is final",
      "Teams must report 15 minutes before match",
      "Misconduct leads to disqualification"
    ],

    judging: [
      "Winner is the team with highest runs after 5 overs",
      "Fair play bonus may be awarded"
    ],

    coordinators: [
      "Gopalkrishna – 8618294189",
      "Rakesh G – 9019491292",
      "Sanjay B – 9482813510",
      "Veeresh A – 9108982315",
      "Halanagouda B – 8747847109",
      "Manjunath H – 8660157339",
      "Rakshita K – 6361397795",
      "Laxmi D – 8277669628"
    ],

    association: [
      "Yeshwanth D – 8088638569",
      "S Manoj – 9036671530",
      "Chaitanya K – 8088896612"
    ],

    staff: [
      "Mr. Somappa N – 9900173851",
      "Mr. SathishKumar L – 8722742496"
    ],
    link: "https://docs.google.com/forms/d/e/1FAIpQLSeWAg0PHXLU-cozULlzUZh2tLX-s8Wpj3a6J6dRLTmwbC2NaQ/viewform?usp=dialog"

  },

  // ISE EVENTS
  "blind-coding": {
    title: "Blind Coding",
    date: "April 25, 2026",
    fee: "₹250 / team",
    prize: "Exclusive Prizes + Certificates",

    rules: [
      "Team Event (Maximum 2 members per team)",
      "Participants must bring their own laptops",
      "Consists of three rounds",
      "The Judges’ decision is final"
    ],

    rounds: [
      "Round 1: Image Replication (Prompt Engineering)",
      "Round 2: Technical Problem Solving (Rapid Tech Quiz)",
      "Round 3: AI Landing Page Creation Challenge"
    ],

    format: [
      "Round 1: Observe AI-generated image and recreate using prompts (10–15 mins)",
      "Round 2: Technical quiz with MCQs, logic, debugging (10–15 mins)",
      "Round 3: Create AI-based landing page (30 mins)"
    ],

    details: [
      "Round 1: Image shown once, no screenshots or notes allowed, multiple prompt attempts allowed, final image evaluated on accuracy and prompt quality",
      "Round 2: Questions on programming, AI, logic, output prediction, no internet allowed, top teams qualify",
      "Round 3: Create landing page using AI tools (HTML/CSS/JS), include design and interaction elements, evaluated on creativity and functionality"
    ],

    tie: "Best solution submitted in shortest time will be the winner",

    coordinators: [
      "Vijay Hiremath – 7795099859",
      "Radha Sadar – 8277803043"
    ],

    staff: [
      "Mrs. Ashwini Gouripur – 7022953946"
    ],

    general: [
      "Max 2 participants per team",
      "Bring your own laptops fully charged",
      "Install required software before event",
      "Follow coordinator and judge instructions",
      "No malpractice or plagiarism allowed",
      "No communication with other teams",
      "Internet allowed only if specified",
      "Submit within time limit",
      "Late submissions may be rejected",
      "Maintain discipline",
      "Mobile phones must be silent",
      "Damage to equipment leads to disqualification",
      "Judges’ decision is final",
      "Organizers can modify rules if required"
    ],

    link: "https://docs.google.com/forms/d/e/1FAIpQLSe7MILMc9kZs51WpKj4sNH-D4LKii7nfyMatLgzK9CpSv399A/viewform"
  },

  "scan-seek": {
    title: "Scan and Seek",
    date: "April 25, 2026",
    fee: "₹250 / team",
    prize: "Exclusive Prizes + Certificates",

    rules: [
      "Team Event (Maximum 2–4 members per team)",
      "Participants must bring their own smartphones",
      "Consists of three rounds",
      "The Judges’ decision is final"
    ],

    rounds: [
      "Round 1: Scan & Solve (QR Clue Hunt)",
      "Round 2: Task Trail Challenge",
      "Round 3: Final Treasure Rush"
    ],

    format: [
      "Round 1: Scan QR → get clue → find next location (10–15 mins)",
      "Round 2: QR tasks (activities, riddles, challenges) (15–20 mins)",
      "Round 3: Final QR treasure hunt with harder clues (20–30 mins)"
    ],

    details: [
      "Round 1: Each team receives first QR, no skipping clues, evaluated on speed & accuracy",
      "Round 2: Tasks must be completed by all members, evaluated on teamwork & creativity",
      "Round 3: Bonus tasks available, first team to reach wins, evaluated on overall performance"
    ],

    tie: "Best solution submitted in shortest time will be declared winner",

    coordinators: [
      "Vishwa A – 8431487492",
      "Neelamma B – 8431153185"
    ],

    staff: [
      "Mr. Hareesha Harogoppa"
    ],

    general: [
      "Maximum 2–4 participants per team",
      "Follow coordinators’ instructions",
      "No malpractice or unfair means",
      "No communication with other teams",
      "Submit within time",
      "Maintain discipline",
      "Judges’ decision is final"
    ],

    link: "https://forms.gle/YZgZN8fEWEndEuqp8"
  },

  // ✅ CULTURAL EVENTS (SINGLE PAGE)

  "cultural": {
    title: "Cultural Events",
    date: "April 2026",
    fee: "Varies per event",
    prize: "Certificates + Prizes",

    rules: [
      "Singing (Solo) – ₹300",
      "Dance (Solo) – ₹500",
      "Skit / Mime – ₹500 per group",
      "Instrumental (Solo) – ₹300",
      "Instrumental (Group) – ₹700 per group",
      "Fashion Show – ₹1000 per group",
    ],

    coordinators: [
      "Prof. Shambulingappa – 9686634981",
    ],

    link: "https://forms.cloud.microsoft/r/SdNq4q9Jdk",
  },

  "festronics": {
    title: "FESTRONICS",
    date: "April 25, 2026",
    fee: "₹100 / team",
    prize: "Exclusive Prizes + Certificates",
    image: "ece1.jpg",

    rules: [
      "Team size: Each team can have a maximum of 2 members",
      "Maximum number of Teams: 40",
      "Disciplines allowed: Teams can consist of participants from any engineering stream",
      "Number of rounds: The competition will have a total of 7 rounds",
      "Round structure: The structure of each round will be announced before it starts"
    ],

    tie: "The tie breaking task will be conducted between teams",

    coordinators: [
      "Ms. Pallavi Sarvade – 8296565851",
      "Mr. Chandranath Hiregoudar (Sambram) – 7795943089"
    ],

    staff: [
      "Prof. Ratnaprabha S – 6360522208",
      "Prof. Anupama Hongal – 7411914870"
    ],
    link: "https://docs.google.com/forms/d/e/1FAIpQLSdYY7I9LjMkynz_OLj8jzYgLUJbzAt5vR_Om98oI0g0Qqx6uQ/viewform"
  },

  "roborace": {
    title: "ROBORACE",
    date: "April 25, 2026",
    fee: "₹200 / team",
    prize: "Exclusive Prizes + Certificates",
    image: "ece1.jpg",

    rules: [
      "Team & Registration: Each team can have a maximum of 2 members. Participation limited to 25 teams (first-come, first-served)",
      "Eligibility: Open to participants from all engineering disciplines",
      "Robot Type: Only manually controlled robots (wired/wireless) allowed. Autonomous robots not permitted",
      "Technical Specifications: Max size 30×30×30 cm, only brushed DC motors, max 12V power",
      "Power Source: Only onboard power supply allowed",
      "Competition Format: Single round with obstacles and challenges",
      "Evaluation & Penalties: Time-based; least time wins. Penalties for violations",
      "Disqualification & Decision: Unsafe design or rule violation leads to disqualification. Judges’ decision is final"
    ],

    tie: "The tie breaking task will be conducted between teams",

    coordinators: [
      "Mr. Prasad Akki – 8050518428",
      "Ms. Poorvi Mahapurush – 9900307286"
    ],

    staff: [
      "Prof. Amarappa Pagi – 9663338639",
      "Prof. Manjunathraddi Bentur – 8867707197"
    ],
    link:"https://docs.google.com/forms/d/e/1FAIpQLSdYY7I9LjMkynz_OLj8jzYgLUJbzAt5vR_Om98oI0g0Qqx6uQ/viewform"
  },
  "roadies": {
    title: "Super Minute Games (Roadies)",
    date: "April 2026",
    fee: "₹200 / team",
    prize: "1st: ₹2000 | 2nd: ₹1000",
    image: "ece1.jpg",

    rules: [
      "A maximum of 2 players can participate in a team",
      "Organizer’s decision is final",
      "Players in one team cannot play in another team",
      "First aid facility will be available",
      "No use of cell phones is allowed",
      "There will be two rounds",
      "Top 5 teams qualify for Round 2",
      "Task details will be explained at the start",
      "Remaining rules will be explained at venue"
    ],

    tie: "Tie breaking task will be conducted between teams",

    coordinators: [
      "Manojgouda V D – 8150893120",
      "Maitri D – 9380415952",
      "Pavankumar B – 9986039738",
      "Rajeshwari B – 8088798536"
    ],

    staff: [
      "Prof. Manjunath Manavalli – 8970621530",
      "Prof. Laxman Patil"
    ],

    link: "https://docs.google.com/forms/d/e/1FAIpQLScckVZ7ltRJr_GKhUf7YBgXs1egmrEZ1iJaCJrFnIiGTf0aBw/viewform?usp=publish-editor"
  },

  "bridge-model": {
    title: "Bridge Model Making",
    date: "April 2026",
    fee: "₹300 / team",
    prize: "1st: ₹1500 | 2nd: ₹1000",
    image: "ece1.jpg",

    rules: [
      "Maximum 3 players per team",
      "2D line diagram will be given",
      "Wire and white powder will be provided",
      "Extra materials are not allowed",
      "Organizer’s decision is final",
      "Players cannot participate in multiple teams",
      "First aid facility will be available",
      "No mobile phones allowed",
      "Only one round",
      "All doubts must be cleared before starting",
      "Remaining rules will be explained at venue"
    ],

    tie: "Tie breaking task will be conducted between teams",

    coordinators: [
      "Sagar J – 8147302919",
      "Aishwarya B K – 7337696322",
      "Bharathkumar Y – 9108431616",
      "Anusha H – 6366246523"
    ],

    staff: [
      "Prof. Rajendra Shettar",
      "Prof. Arun Tandi"
    ],

    link: "https://docs.google.com/forms/d/e/1FAIpQLSe7SM8e-krZmIEF3Mta_exy4csxgiyg8ieNmVJFX7PTnEbmlQ/viewform?usp=publish-editor"
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

      <div className="max-w-2xl mx-auto bg-white/10 p-6 rounded-xl text-left space-y-4">

        <p className="text-lg">
          Registration Fee:
          <span className="font-bold text-green-400"> {event.fee}</span>
        </p>

        <p><strong>Prize Pool:</strong> {event.prize}</p>

        {/* RULES */}
        <div>
          <h2 className="text-xl font-semibold text-cyan-300">Rules & Guidelines</h2>
          <ul className="mt-2 space-y-1">
            {event.rules.map((r, i) => (
              <li key={i}>• {r}</li>
            ))}
          </ul>
        </div>

        {/* ROUNDS */}
        {event.rounds && (
          <div>
            <h2 className="text-xl font-semibold text-cyan-300">Rounds</h2>
            <ul className="mt-2 space-y-1">
              {event.rounds.map((r, i) => (
                <li key={i}>• {r}</li>
              ))}
            </ul>
          </div>
        )}

        {event.tie && (
          <p><strong>In case of tie:</strong> {event.tie}</p>
        )}

        {/* COORDINATORS */}
        <div>
          <h2 className="text-xl font-semibold text-cyan-300">Event Coordinators</h2>
          {event.coordinators.map((c, i) => (
            <p key={i}>{c}</p>
          ))}
        </div>

        {/* STAFF */}
        {event.staff && (
          <div>
            <h2 className="text-xl font-semibold text-cyan-300">Staff Coordinators</h2>
            {event.staff.map((s, i) => (
              <p key={i}>{s}</p>
            ))}
          </div>
        )}

        {/* REGISTER BUTTON */}
        {event.link && (
          <a
            href={event.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block bg-cyan-400 px-6 py-3 rounded text-black font-semibold text-center w-full"
          >
            Register Now
          </a>
        )}

      </div>
    </section>
  );
}