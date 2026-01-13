import { useState } from "react";
import khayrImg from "./assets/khayr.png";
import AIVideoImg from "./assets/aiVideo.jpg";
import CvMaker from "./assets/cvMaker.jpg";
import ELearning from "./assets/eLearning.webp";
import ChatBot from "./assets/chatbot.png";
import Travel from "./assets/travel.jpeg";

const PROJECTS = [
  {
    title: "E-Learning Platform",
    description:
      "A platform that curates and recommends courses using AI & ML for better learning experiences.",
    image: ELearning,
    link: "https://simplitaught.com/",
  },
  {
    title: "Job Hunt ATS CV Maker",
    description:
      "A CV maker that optimizes resumes to pass 90%+ ATS screenings with AI analysis.",
    image: CvMaker,
    link: "https://github.com/yourusername/ats-cv-maker",
  },
  {
    title: "AI Chatbot Assistant",
    description:
      "A chatbot integrated with PDFs, blogs, and videos to provide instant Q&A assistance.",
    image: ChatBot,
    link: "https://github.com/yourusername/ai-chatbot",
  },
  {
    title: "Mobile Health App",
    description:
      "A cross-platform mobile app for tracking fitness, nutrition, medical history and give health advice.",
    image: khayrImg,
    style: { width: "100%", height: "200px", borderRadius: "8px" },
    link: "https://github.com/yourusername/health-app",
  },
  {
    title: "Travel Booking System",
    description:
      "Full-stack booking system for hotels, flights, and transport. Easy to use and secure.",
    image: Travel,
    link: "https://github.com/yourusername/travel-booking",
  },
  {
    title: "AI Video Generator",
    description:
      "An AI-powered tool that generates sign language video subtitles for deaf individuals.",
    image: AIVideoImg,
    style: {
      width: "100%",
      height: "200px",
      borderRadius: "8px",
      objectFit: "inherit",
    },
    link: "https://github.com/yourusername/ai-video-generator",
  },
];

function ProjectCard({ project }) {
  return (
    <div
      style={{
        borderRadius: "12px",
        padding: "20px",
        maxWidth: "300px",
        width: "80%",
        margin: "0 auto",
        backgroundColor: "white",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        color: "black",
        display: "flex",
        flexDirection: "column",
        transition: "transform 0.2s ease, box-shadow 0.2s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-6px)"; // 👈 add back
        e.currentTarget.style.boxShadow = "0 10px 24px rgba(0,0,0,0.15)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.1)";
      }}
    >
      <img
        src={project.image}
        alt={project.title}
        style={{ width: "100%", height: "200px", borderRadius: "8px" }}
      />
      <div style={{ flexGrow: 1, textAlign: "left", marginTop: "15px" }}>
        <h3
          style={{
            fontSize: "1.1rem",
            fontWeight: "600",
            marginBottom: "10px",
            color: "#222",
          }}
        >
          {project.title}
        </h3>
        <p
          style={{
            fontSize: "0.95rem",
            marginBottom: "15px",
            color: "#555",
            lineHeight: "1.5",
          }}
        >
          {project.description}
        </p>
        <button
          onClick={() => window.open(project.link, "_blank")}
          style={{
            margin: "0 auto", // 👈 center horizontally
            display: "block",
            padding: "10px 16px",
            border: "none",
            borderRadius: "8px",
            backgroundColor: "#00ADB5",
            color: "white",
            fontWeight: "500",
            cursor: "pointer",
            transition: "background 0.3s ease",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.backgroundColor = "#008c93")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.backgroundColor = "#00ADB5")
          }
        >
          View Project
        </button>
      </div>
    </div>
  );
}

export default function Portfolio() {
  // const [expanded, setExpanded] = useState(false);
  const [expanded] = useState(false);

  return (
    <section
      style={{
        textAlign: "center",
        padding: "20px 40px",
        backgroundColor: "#dededeff",
        outline: "none",
        userSelect: "none",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          fontSize: "2.5rem",
          fontWeight: "bold",
          marginBottom: "10px",
          color: "#222",
          borderBottom: "4px solid #00ADB5",
          display: "inline-block", // keeps line just under text
          paddingBottom: "6px",
          minWidth: "1050px", // ✅ set a fixed width similar to Services
        }}
      >
        Portfolio
      </h2>

      {/* First 6 projects */}
      <div
        style={{
          paddingLeft: "70px",
          paddingRight: "70px",
          marginTop: "40px",
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "30px",
          maxWidth: "1070px",
          marginInline: "auto",
        }}
      >
        {PROJECTS.slice(0, 6).map((project, idx) => (
          <ProjectCard key={idx} project={project} />
        ))}
      </div>

      {/* Extra projects */}
      {expanded && (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "28px",
            maxWidth: "1100px",
            margin: "40px auto 0 auto",
          }}
        >
          {PROJECTS.slice(6).map((project, idx) => (
            <ProjectCard key={idx} project={project} />
          ))}
        </div>
      )}

      {/* One button at a time */}
      {/* <div style={{ marginTop: "40px", display: "flex", justifyContent: "center" }}>
        {!expanded ? (
          <button
            onClick={() => setExpanded(true)}
            style={{
              padding: "10px 20px",
              border: "none",
              borderRadius: "8px",
              backgroundColor: "#00ADB5",
              color: "white",
              fontSize: "1rem",
              fontWeight: "500",
              cursor: "pointer",
            }}
          >
            Show More
          </button>
        ) : (
          <button
            onClick={() => setExpanded(false)}
            style={{
              padding: "10px 20px",
              border: "none",
              borderRadius: "8px",
              backgroundColor: "#FF5722",
              color: "white",
              fontSize: "1rem",
              fontWeight: "500",
              cursor: "pointer",
            }}
          >
            Show Less
          </button>
        )}
      </div> */}
    </section>
  );
}
