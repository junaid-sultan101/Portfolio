import { useState, useEffect, useMemo } from "react";

export default function Header() {
  const [active, setActive] = useState("Home"); // 👈 Default active

  // ✅ Memoize so it's not recreated each render
  const links = useMemo(
    () => ["Home", "Services", "Portfolio", "About", "Contact"],
    []
  );

  useEffect(() => {
    const sections = links.map((link) =>
      document.getElementById(link.toLowerCase())
    );

    const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const sectionId = entry.target.id;
              const activeLink = sectionId.charAt(0).toUpperCase() + sectionId.slice(1);
              setActive(activeLink);
            }
          });
        },
        { threshold: 0.4 } // 👈 lower from 0.6 to 0.4
    );


    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, [links]); // ✅ safe now, because links is stable

  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "16px 243px",
        backgroundColor: "black",
        color: "white",
        width: "100%",
        boxSizing: "border-box",
        borderBottom: "3px solid #00ADB5",
        position: "sticky",
        top: 0,
        zIndex: 100,
        outline: "none",     // 👈 remove black outline
        userSelect: "none",
      }}
    >
      {/* Logo */}
      <div style={{ fontSize: "20px", fontWeight: "bold", color: "#00ADB5" }}>
        MyPortfolio
      </div>

      {/* Navigation Links */}
      <nav>
        <ul
          style={{
            listStyle: "none",
            display: "flex",
            gap: "50px",
            margin: 0,
            padding: 0,
          }}
        >
          {links.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                onClick={() => setActive(link)}
                style={{
                  color: active === link ? "white" : "gray",
                  textDecoration: "none",
                  fontWeight: active === link ? "bold" : "normal",
                  paddingBottom: "5px",
                  borderBottom:
                    active === link
                      ? "3px solid #00ADB5"
                      : "3px solid transparent",
                  transition: "all 0.3s ease",
                }}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
