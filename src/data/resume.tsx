import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Gowtham",
  initials: "DV",
  url: "https://dillion.io",
  location: "San Francisco, CA",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "Undergrad student, passionate about building applications, learning, and sharing insights through blogs.",
  summary:
    "In 2024, following a Software Development internship, I began independently building impactful applications. With a strong MERN stack foundation, I’ve developed projects like Instant Transfer and INSTASAVE, enhancing user experiences and secure data management. As a core team member of the Google Developer Students Club, I’m passionate about advancing my skills and sharing knowledge within the developer community.",
  avatarUrl: "/Profile.jpg",
  skills: [
    "React",
    "Typescript",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Postgres",
    "Prisma",
    "Firebase",
    "Docker",
    "Java",
    "Next.js",
    "AWS",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    {
      href: "https://vvssgowtham.hashnode.dev/",
      icon: NotebookIcon,
      label: "Blog",
    },
  ],
  contact: {
    email: "hello@example.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/vvssgowtham",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/vvssgowtham",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/vvssgowtham",
        icon: Icons.x,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Perky Digital Pvt Ltd",
      href: "https://zaver.one",
      badges: [],
      location: "Remote",
      title: "Software Development Intern",
      logoUrl: "/atomic.png",
      start: "Feb 2024",
      end: "Apr 2024",
      description:
        "Developed a flexible data management system with MongoDB, enabling data scraping and username extraction via regex/APIs, integrated OpenAI NLP API for sentiment analysis and user insights, and implemented an Excel export feature with 94% accuracy across 100+ records.",
    },
  ],
  // education: [
  //   {
  //     school: "",
  //     href: "https://uwaterloo.ca",
  //     degree: "Bachelor's Degree of Computer Science (BCS)",
  //     logoUrl: "/waterloo.png",
  //     start: "2016",
  //     end: "2021",
  //   },
  //   {
  //     school: "Wilfrid Laurier University",
  //     href: "https://wlu.ca",
  //     degree: "Bachelor's Degree of Business Administration (BBA)",
  //     logoUrl: "/laurier.png",
  //     start: "2016",
  //     end: "2021",
  //   },
  //   {
  //     school: "International Baccalaureate",
  //     href: "https://ibo.org",
  //     degree: "IB Diploma",
  //     logoUrl: "/ib.png",
  //     start: "2012",
  //     end: "2016",
  //   },
  // ],
  projects: [
    {
      title: "BlogHere",
      href: "https://bloghere.vercel.app/",
      dates: "Nov 2023 - Dec 2023",
      active: true,
      description:
        "A dynamic and secure blogging platform built on the MERN stack. Harnessing the power of JWT (JSON Web Tokens) for robust authentication, Blog Here offers a seamless and personalized blogging experience. Explore, create, and connect.",
      technologies: [
        "React.js",
        "Tanstack Query",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Bootstrap",
        "TailwindCSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://bloghere.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/vvssgowtham/BlogHere",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/BlogHere.jpg",
    },
    {
      title: "Magic UI",
      href: "https://instant-transfer-virid.vercel.app/",
      dates: "Oct 2024",
      active: true,
      description:
        "Instant Transfer is a secure, React-based application for fast and easy money transfers, allowing users to sign up, log in, view balance, and send money with a sleek, user-friendly interface.",
      technologies: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "TailwindCSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://instant-transfer-virid.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/magicuidesign/magicui",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/InstantTransfer.png",
    },
    {
      title: "InstaSave",
      href: "https://instasave-olive.vercel.app/",
      dates: "Dec 2023",
      active: true,
      description:
        "InstaSave is a ReactJS-based web app, using NodeJS and ExpressJS for backend operations. It integrates with the InstaSaver API, allowing users to download Instagram content directly via a link. Tailwind CSS ensures responsiveness, providing a sleek and user-friendly experience.",
      technologies: ["React.js", "Node.js", "Express.js", "API"],
      links: [
        {
          type: "Website",
          href: "https://instasave-olive.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/vvssgowtham/InstaSave",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/InstaSave.jpg",
    },
    {
      title: "Visualize",
      href: "https://visualize-charts.vercel.app/",
      dates: "April 2023",
      active: true,
      description:
        " This platform showcases the visualization of average temperature in Celsius, obtained through a weather API. For visualization, it leverages Chart.js libraries integrated within React.js. Notably, the entire user interface is crafted using Aceternity UI.",
      technologies: [
        "React.js",
        "Node.js",
        "Express.js",
        "Typescript",
        "Aceternity UI",
        "API",
      ],
      links: [
        {
          type: "Website",
          href: "https://visualize-charts.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/vvssgowtham/Visualize",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/visualize.png",
    },
  ],
} as const;
