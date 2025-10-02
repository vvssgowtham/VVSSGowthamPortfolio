import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Gowtham",
  initials: "DV",
  url: "https://dillion.io",
  location: "San Francisco, CA",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "Backend engineer building production-ready APIs and integrations.",
  summary:
    "Backend engineer building production-ready APIs and integrations. Skilled in React, Java/Spring Boot, Node.js, Docker, MongoDB, Twilio",
  avatarUrl: "/Profile.jpg",
  skills: [
    "React",
    "Typescript",
    "Spring Boot",
    "Twilio",
    "RestAPI",
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
    "gRPC",
    "n8n",
    "OpenAI",
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
      company: "Phenom People pvt Ltd",
      href: "https://www.phenom.com",
      badges: [],
      location: "Onsite - Hyderabad, India",
      title: "Product Development Engineer - 1",
      logoUrl: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAAhFBMVEUAAAD////8/PwEBAT5+fm0tLQICAj29vYODg7z8/Nzc3ODg4Ojo6M+Pj5mZmagoKDKysoeHh7i4uLZ2dl9fX2tra1VVVXBwcHS0tIaGhpFRUUlJSW4uLheXl5NTU3MzMyWlpaKiorq6uo0NDRISEje3t4rKyuYmJhtbW1aWlpjY2M3Nzd58GkdAAAKz0lEQVR4nO1dh3ajOhBFxWDcCxj3msRO/P//99QoksCYTRn5He5mHScBn7lM0Wg0As9r0aJFixYtWrRo0aJFixYvCgItwDdBit9encz/ASQDtCT/Dlv216TDZCbT4f7Wi/r9qHdbrDfkJZ2kO4wGhxAVEBzi/n4FLdeTUFe8u7vOAoQwQjQFlj+eB19TdhRRhuemhtJIO7zOMJcac+lT8J85E4TP4z2RR/ug4j4Ck4wsYiY0lgowwH8j/pKMhFbcVIi8wvuEissuJS6B0AoKljt2uJtRjMv0ETMOQaaLcp2IF0qTi5s64UL1WJQKxRWvIpIGMPF6IsRBLyHelFlVyF1cenYVCfUXdhg9XFy0rf1ZOnOukBLxM9tSYW0ELbWNnjCpchJVmmH/ju64CY+jvndiloLoI4sqocFPiYkjTKQUY9SIhaRChddvfXEl3MBYiBQ0My01auLEDZVwyziiUFpLMxdBVI6OHWgOEr7Xo+ryoqCJdYmzxBljNzx+r6TCFD1wE/MPPB+Tv6Mh6jngJGQTSosqoYBxnnAV36tfSFsUX0NIBurlQLEVsHAhazwvD4flOdOK+E9N2rMusHX5Xj+wVIFV/ovCpL+4rHgWtvpYRJ1ZbmMGb8rcpAvL5B6WDCBMF8yJJ72Nl8+22PfpKKFpwqjR5h+x8CCnjD7pIMtDqEiBtwuNhCqhrDt2hJYTx7lPZCyHwaetD8wv+uxLzjVyuYhitHjnM2BcPFy+RnCRi3jdg8rYtck5RZ1pQfyUhfwiMp0xZvPs6zyFUYiQa4QCnMWi1LIw7ucK0I8X38kIabmMTFQw6ospPwyTgyRRtC32Uy/VQOlJ7P8CazyUSmbTsjP+BAukG7scPEae//jCErKnBf/IfL73V3JbGJhOy8Nun40ItfgS1qVFMIwSKG9nyYluVDzuxjX6kMZFTkgrp0qsQQIX4bNb3Tm4oa9EeeuhQHweRRKrRBGg499IbomTYMPLma18PnFRRQAbYmxYFsLzGuf6JUzPejWR/9Bhg33NcECUyq521QgPAcpDxNsZcrABO3irDLw5lMo2M50FHyQjkGHkqKUnmBvW1pPD4APzSkdFNtE3s3mMBn8kvI7ELFNT/NXExu9GzGKfNn8icv84VjNkDunnRnL4iXE6M83Lb0n7AENsVH8ojpsFnZORN4tZyd9jZ+bvFI2aBB2fZzimcd1+T94qkB6iWthi17NhCWGqZQbiw05/HraI17eqWOemS7YHo6JHAcKWjL76QDBpNp0gXmykjRSg6EjI2KiQylGkwSd47FqYs+RmH/Ez6JgFt6ZSEDNs8RQHYGg3idCmUpQRcUMjnabFg6MetTCUaSGDSNLofJ5t6TUIKCLIxHuj6QQ7dGtpJP49eSthE8EfzUzLnxnnY3T8HVkfwiDCJ4i7Zp9gpb9sQvI7sj6EpRFeYmtkWiNk1lHQCGCu27EmujhJRayBmlzFCJsFx7fflbkUBhFRprpnbbH1F9afGi7CeJwhio0mER51jqR2qpvjZi2rNAzgPwTTtHgOOVvldfcKZH/0J0buKxo6IFIUq7UsW+R4Qhrf+7J4IPTpAhGxqhZuauuMqrDVXdoKCTd/JLsGSyNiqSr2vfolNOJ7ft9aTEQYIvetMC2Kvri31wfgocmCn3sDqZjaRASCD7VS5VcsWYm3KzP0coAE30oi6J3P3H0lehFEUONm5ZGldSrF+ArT4lhBhKL5qkygXDuMzNYcQsSJa5jF6SqNMCYbsdhj17N92evbTUpWeTDtWMdDE0HnvRTJ19w+dZLLvLQBh+VZMN0CVURE3e7YLR1NuKL6PL0s6VAbQLXOVvqIoDIf2UtwTEH+2wSX6QM1LlP+OpGsqXfS68pWh3xnUvdrW9n2eKpb1P5zIjmh2Xj3kR+/WRzn5TQ4b9FTA4M6IgGXOVwOThHDaTzhvWe0Qh0hWsM1l9cRQUZbRKmHI9Vgc4JiUU9ENWmIEMVGbdm5Scu9ioJMqJ4kkouZtjeW9ADK31DR4eQqEWw2lmKESs8IEL48074CRSQVXzkGrd6qRNcley+dI6JrpAzBAniLkj1DVMu8NfyUu6Sdd8H62Wn+nxERc4p0xKskg4vfQnQeEuhdF3alMZO+YsQoHJlqZWJ0cTpABKX7R2hFmE21ljGlcmMS+B4+SyP4fYIzF3iEtON5llbvnSLCEHdPIaa4fHtrzhiJrcgoGK88Aht4S4kwAlvPu3cQ39zyiIjaG5cMMx8HJmNqJEQdbiNvHSxX0apVwngksnvGanOGgF0yVW0L6zHfwVCeH8rgFkM0AVWiggifIG2iJEAy16LyIPFGzkYm0YdbN3+o1Igw/c3tOrf1MRv0LqpSBym6DnuhJ++I8fkV714+o3EnOczCcLZMtoP+7iJqK8AZiYUHRAqlORZg/W7XT1fkHNjdZuExEXufEcnZOKWQKiK6nKZTu3inhyqN1F9xx7g8cvaXQkvENbREXENLxDW0RFxDS8Q1tERcQ0vENfxviGxNHjA9ot9Hh+ql0eBVNRIbTSUwWw2+DeId9T1WjNbYqan4k+At+qHWWkLxzaVC6PMwbpTAmHzUn+QkjlrFHdPBS+qDYfWuRa3ZFH6p459AyCUs3P8ouLtVdmuEy5L3KPEVKDq/u1fUfRK8c9zvTbiXo8lNdSy/JBHV/LofLS6ClJNrBvUgsh05Xwd5WeRr5ORVvSMHKW5JeGE+pPj9dWnUwh3f54uz5B+7E7RFRFBNfT/fUIuf4IkL+VbvjjNhuSDI94QBf/YIKUbWf2zBz9bWIakQ9bUZfvxbe7Ec9bsfw40DHQ/344FNBGfx5z8IwsX/jGcUBcvj+udFawL/itXtIOlyV1DLU/ZCvO5ukjahBdcumFJ8rztR86aA339xGU29bIOhlpZ4GilpR8wke4e05ZSdTSdQz4IRdyAMUXYvZSbSebx/YvuQcCz/bfCu9sLIe0ZjdCBArfx+hFI5xEvIbyGwPK1XaeKr9/6IF7Fnj7E4LpHShuoz52T6IDQ8sjpnjdXay3J8uxd3eerjBLnvxnPR855O5lXzLEXnKYyXfPFGxHwbC5Kd1tLUlnF/MZzqVkamw88oXuoNzDhVTCBuZwZyh0/9xj75Q0XULiOEz8skvp5OfYbTdZDwO5ErZ5KbwvJqPZWXIYbpb9oi7Yko2pXGVbsiC3XHTCc0fU1gRvgEh3U7DUU/rEINL/5RQOsnccNnV9SjA5ML80dY/CATNqiOYVLHT/NhCN/GDiYJ9pfNH/LyEHOYhw4QcWPLH+RBIe7UJOAfn4iyz/MYA7bJXn+QCNhTX0Se+yV2HGg5VxWKB+Hiu4CP9e8Ad1tNIeYVq95cPQupIFzNhkla3KEnMpb3HuSDKX1Z2vVvcgnEylFqNJMl8Wiy6wIvnMjZheftB0EmuxTvsU7U7XP5pjEUDt6gCw/pfhX+fyNWpqr2TekaUccIc5xE6qEw4JWt/M0wOigXoA8f8ySOEDOrw2noQVNQKM78mJlfevG7ErWKR7qbctbpDbW1IBgCOUwBpm/RYE4LYttpPJ3H0X7qZXuiwQ2rEmIT2HZu38comG/H/c+LW3vaKpGGIDK9rBe3KGIT3SiKer3d232q7uEEvo7wJFTdpFRcYr15DUhO4tVXa6Gvog4Lryp3HaBXdZqB1Lx/KTJVcGUEbNGiRYsWLVq0aNGiRYvfwn8erGGR44FLIAAAAABJRU5ErkJggg==",
      start: "Jun 2025",
      end: "Present",
      description: "Engineered a production-ready, multi-tenant voice calling platform using the Twilio SDK to manage both incoming and outgoing calls. Responsible for the entire lifecycle, from the initial Proof of Concept (POC) to designing the core database schemas."
    },
    {
      company: "Kodem Legal Technologies",
      href: "https://kodemtechnologies.com/",
      badges: [],
      location: "Onsite - Hyderabad, India",
      title: "Software Development Intern",
      logoUrl: "/kodem.png",
      start: "Dec 2024",
      end: "May 2025",
      description: "Gained hands-on experience with Spring Boot and gRPC, contributing to backend service development. Designed and implemented an Invoice Linking feature integrated with QuickBooks, improving workflow efficiency for case workers and reducing manual tasks. Developed automation scripts using Selenium, including form-filler Lambdas for USCIS and Passport applications such as Form I-129 and DS-160.",
    },
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
    }
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
      title: "n8n Gmail Summarizer",
      href: "https://n8n-gmail.vvssgowtham.dev/",
      dates: "Aug 2025",
      active: true,
      description: "An n8n workflow that leverages the Gmail and OpenAI APIs to automatically summarize emails. It fetches unread emails, generates concise summaries using OpenAI, and sends these summaries to Telegram, enhancing productivity and email management.",
      technologies: ["n8n", "Gmail API", "OpenAI API", "Telegram API"],
      links: [
        {
          type: "Website",
          href: "https://n8n-gmail.vvssgowtham.dev/",
          icon: <Icons.globe className="size-3" />,
        }
      ],
      image: "/n8n.png",
    },
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
