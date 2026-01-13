import React from "react";

function Footer() {
  return (
    <footer style={styles.footer}>
      <p style={styles.text}>
        © {new Date().getFullYear()} Junaid A. All rights reserved.
      </p>

      <div style={styles.links}>
        <a href="https://www.linkedin.com/in/junaidsultan" target="_blank" rel="noreferrer" style={styles.link}>
          LinkedIn
        </a>
        <a href="mailto:junaidaraih786@gmail.com" style={styles.link}>
          Email
        </a>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: "#1f1f1f",
    color: "#dedede",
    padding: "20px",
    textAlign: "center",
    marginTop: "40px",
  },
  text: {
    margin: "0 0 10px 0",
    fontSize: "14px",
  },
  links: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
  },
  link: {
    color: "#00ADB5",
    textDecoration: "none",
    fontSize: "14px",
  },
};

export default Footer;
