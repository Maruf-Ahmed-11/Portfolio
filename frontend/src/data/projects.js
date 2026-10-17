import portfolioImg from "../assets/projects/portfolio.png";
import bazarDorImg from "../assets/projects/bazar-dor.png";
import fitlogImg from "../assets/projects/fitlog.png";

const projects = [
  {
    id: 1,
    title: "Developer Portfolio & Personal Showcase",
    image: portfolioImg,
    category: "Frontend & UI/UX Engineering",
    technologies: [
      "React",
      "Tailwind CSS",
      "JavaScript (ES6+)",
      "React Router",
      "Vite"
    ],
    description:
      "A modern, high-performance personal portfolio built for showcasing frontend engineering skills, interactive projects, academic background, and an ATS-friendly printable resume viewer. Features responsive navigation, vibrant glassmorphism design, and rich micro-interactions.",
    live: "https://github.com/Maruf-Ahmed-11/Portfolio",
    github: "https://github.com/Maruf-Ahmed-11/Portfolio",
    challenges: [
      "Building a smooth active-section scroll spy with route-aware navigation across all pages",
      "Crafting an ATS-compatible, print-optimized resume view with zero dependency bloat",
      "Ensuring fluid responsiveness across ultra-wide monitors down to small mobile viewports"
    ],
    future: [
      "Interactive contact form integration via EmailJS / Web3Forms",
      "Markdown-powered tech blog section with syntax highlighting",
      "Multi-language locale toggle with persistent user preferences"
    ],
  },
  {
    id: 2,
    title: "Bazar Dor – Daily Commodity Price Tracker",
    image: bazarDorImg,
    category: "Full-Stack Web App with Auth",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "DaisyUI",
      "MongoDB",
      "Better-Auth",
      "Custom API"
    ],
    description:
      "A modern, responsive web application designed to track the daily market prices of essential commodities in Bangladesh. Stay updated with the latest price trends, market-specific rates, and price fluctuations for everyday items like rice, vegetables, meat, and spices.",
    live: "https://a07-bazar-dor-flax.vercel.app",
    github: "https://github.com/Maruf-Ahmed-11/A07-Bazar-Dor",
    challenges: [
      "Live Price Tracking & Trends: Real-time visual percentage indicators showing price increases, decreases, or flat rates compared to previous days",
      "Dynamic Product Pages: Detailed views for individual items featuring minimum, maximum, and average price calculations across regional markets",
      "Category Sorting Controls: Effortlessly filter and sort commodities by default, price low-to-high, and price high-to-low"
    ],
    future: [
      "Secure Social Authentication: Multi-provider login (Google, GitHub, email/password) with duplicate account conflict prevention",
      "Personalized User Profiles: Protected dashboard to manage user details with dynamic avatar synchronization",
      "Crowdsourced Community Price Reporting: Localized daily submission for neighborhood bazaar price verification"
    ],
  },
  {
    id: 3,
    title: "FitLog – Focused Gym Companion & Planner",
    image: fitlogImg,
    category: "Health & Fitness Web App",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Context API",
      "Fetch API"
    ],
    description:
      "FitLog is a dark, no-nonsense gym companion built for focused training. It allows users to browse a comprehensive library of exercises, view detailed technical specifications for each movement, and seamlessly organize their routines by locking lifts into a daily plan or saving them for later.",
    live: "https://fitlog-app-a6-bice.vercel.app",
    github: "https://github.com/Maruf-Ahmed-11/fitlog-app-a6",
    challenges: [
      "Responsive Workout Library: Dynamic mobile-friendly grid displaying workouts fetched from an external API with category tags and key metrics",
      "Interactive Planning System: Seamlessly add workouts to 'Today's Plan' or 'Save for Later', with instant live navbar counter updates via Context API",
      "Dynamic Routing & Details: Dedicated dynamically generated exercise pages featuring high-quality imagery, step-by-step instructions, and difficulty specs"
    ],
    future: [
      "Live Metrics Dashboard: Automated calculations for total exercises, combined duration, and total calories burned based on user selections",
      "Advanced Sorting & Management: Custom dropdown sorting by Duration, Calories, or Rating with one-click actions to mark workouts as done or remove them",
      "Workout History & Streak Tracker: Long-term analytics and personal record logging"
    ],
  },
];

export default projects;
