function About() {
  return (
    <div
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
        About
      </h2>

      <p style={{ fontSize: "18px", lineHeight: "1.7", marginBottom: "20px" }}>
        I am a full-stack software engineer with multi-platform expertise. I build{" "}
        <b>Mobile Apps</b>, <b>Web Apps</b>, <b>Desktop Apps</b>, and work with{" "}
        <b>AI & Machine Learning</b>. I also specialize in <b>web scraping</b>, backend development, and complete end-to-end software solutions.
      </p>

      {/* ✅ Service-style Box */}
      <div
        style={{
          backgroundColor: "#dededeff",
          borderRadius: "12px",
          padding: "20px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          margin: "30px 0",
        }}
      >
        <h3 style={{ fontSize: "24px", fontWeight: "700", marginBottom: "15px" }}>
          My Expertise
        </h3>
        <ul style={{ fontSize: "18px", lineHeight: "1.8", paddingLeft: "20px", textAlign: "left" }}>
          <li>Mobile App Development (Flutter, React Native, Kotlin, Swift)</li>
          <li>Web App Development (React, Node.js, Express, Next.js)</li>
          <li>Desktop App Development (Electron, Python)</li>
          <li>AI/ML Model Training & Integration</li>
          <li>Advanced Web Scraping & Automation</li>
          <li>Backend & API Development</li>
        </ul>
      </div>

      <h3 style={{ fontSize: "24px", fontWeight: "700", marginTop: "30px" }}>
        What I Do
      </h3>

      <p style={{ fontSize: "18px", lineHeight: "1.7" }}>
        I help startups, businesses, and individuals build modern, fast, and scalable digital products. From idea to deployment — I deliver complete software solutions.
      </p>
    </div>
  );
}

export default About;
