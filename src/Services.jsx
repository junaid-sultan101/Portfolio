import React, { useState } from "react";
import { FaTimes } from "react-icons/fa"; // for close button
import { FaGlobe, FaMobileAlt, FaBrain } from "react-icons/fa";

// Example services data
const SERVICES = [
  {
    icon: <FaGlobe size={40} color="#00ADB5" />,
    name: "Web App Development",
    p: "We build responsive and high-performance web applications according to your needs.",
    details: {
      frontend: [
        "React",
        "Next.js",
        "TailwindCSS",
        "Bootstrap",
        "JavaScript",
        "Vue.js",
      ],
      backend: ["Node.js", "Python", "Laravel", "PostgreSql", "MongoDB"],
    },
  },
  {
    icon: <FaMobileAlt size={40} color="#00ADB5" />,
    name: "Mobile App Development",
    p: "We work on developing cross-platform mobile apps for iOS and Android.",
    details: {
      frontend: ["Flutter", "Swift", "Kotlin", "React Native"],
      backend: ["Firebase", "Django", "Flask", "Node.js", "Laravel"],
    },
  },
  {
    icon: <FaBrain size={40} color="#00ADB5" />,
    name: "AI & ML Projects",
    p: "We are working on various projects using AI and ML for research and development.",
    details: {
      frontend: ["Data Visualization", "Streamlit"],
      backend: ["TensorFlow", "PyTorch", "Scikit-learn"],
    },
  },
];

// ✅ Service Card
function ServiceCard({ service, onOpen }) {
  return (
    <div
      style={{
        width: "280px",
        padding: "20px",
        borderRadius: "12px",
        backgroundColor: "white",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        color: "black",
        textAlign: "center",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        outline: "none", // 👈 remove black outline
        userSelect: "none",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-6px)";
        e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.2)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.1)";
      }}
    >
      <div style={{ marginBottom: "15px" }}>{service.icon}</div>
      <h3 style={{ fontSize: "1rem", fontWeight: "600", marginBottom: "10px" }}>
        {service.name}
      </h3>
      <p style={{ fontSize: "0.9rem", color: "#555", marginBottom: "15px" }}>
        {service.p}
      </p>
      <button
        onClick={onOpen}
        style={{
          marginTop: "10px",
          padding: "8px 16px",
          border: "none",
          borderRadius: "6px",
          backgroundColor: "#00ADB5",
          color: "white",
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
        Show More
      </button>
    </div>
  );
}

// ✅ Popup Modal
function Modal({ service, onClose }) {
  if (!service) return null;
  return (
    <div
      onClick={onClose} // ✅ click outside closes
      style={{
        position: "fixed",
        inset: 0,
        backgroundColor: "rgba(0,0,0,0.6)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1000,
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()} // ✅ prevent closing when clicking inside box
        style={{
          width: "500px",
          maxWidth: "90%",
          backgroundColor: "white",
          borderRadius: "12px",
          padding: "20px",
          position: "relative",
          boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
          animation: "fadeIn 0.3s ease",
        }}
      >
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            background: "none",
            border: "none",
            cursor: "pointer",
            fontSize: "1.2rem",
            color: "#333",
          }}
        >
          ✕
        </button>

        <div style={{ marginBottom: "15px", textAlign: "center" }}>
          {service.icon}
        </div>
        <h2 style={{ marginBottom: "10px", textAlign: "center" }}>
          {service.name}
        </h2>
        <p style={{ marginBottom: "20px", color: "#555", textAlign: "center" }}>
          {service.p}
        </p>

        <div>
          {/* Frontend Section */}
          <h4
            style={{
              textAlign: "center",
              marginBottom: "10px",
              backgroundColor: "#dededeff",
              color: "black",
              padding: "6px 0",
              borderRadius: "6px",
            }}
          >
            Frontend
          </h4>
          <div
            style={{
              textAlign: "center",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "16px", // spacing between items
              marginBottom: "20px",
            }}
          >
            {service.details.frontend.map((tech) => (
              <span key={tech} style={{ fontSize: "1rem", color: "#333" }}>
                <span style={{ color: "#00ADB5", marginRight: "4px" }}>★</span>
                {tech}
              </span>
            ))}
          </div>

          {/* Backend Section */}
          <h4
            style={{
              textAlign: "center",
              marginBottom: "10px",
              backgroundColor: "#dededeff",
              color: "black",
              padding: "6px 0",
              borderRadius: "6px",
            }}
          >
            Backend
          </h4>
          <div
            style={{
              textAlign: "center",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "16px",
            }}
          >
            {service.details.backend.map((tech) => (
              <span key={tech} style={{ fontSize: "1rem", color: "#333" }}>
                <span style={{ color: "#00ADB5", marginRight: "4px" }}>★</span>
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ✅ Main Component
export default function Services() {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <section
       style={{
        color: "black",
        padding: "20px 20px",
        maxWidth: "1050px",
        margin: "0 auto",
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
          // display: "inline-block",
          paddingBottom: "6px",
        }}
      >
        Services
      </h2>

      <div
        style={{
          marginTop: "40px",
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          gap: "40px",
          flexWrap: "wrap",
        }}
      >
        {SERVICES.map((service, idx) => (
          <ServiceCard
            key={idx}
            service={service}
            onOpen={() => setSelectedService(service)}
          />
        ))}
      </div>

      {selectedService && (
        <Modal
          service={selectedService}
          onClose={() => setSelectedService(null)}
        />
      )}
    </section>
  );
}
