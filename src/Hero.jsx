import { ReactTyped } from "react-typed";
import myPhoto from "./assets/myphoto.jpg";

function Hero() {
  return (
    <section
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0px 16%",
        minHeight: "80vh",
        backgroundColor: "#dededeff",
        color: "black",
        flexWrap: "wrap",
        outline: "none",     // 👈 remove black outline
        userSelect: "none",
      }}
    >
      {/* Left Side (Typing Text) */}
        <div style={{ flex: 1, minWidth: "280px" }}>
            <h1 style={{ fontSize: "2rem", marginBottom: "10px" }}>Hello,</h1>
            <h1 style={{ fontSize: "2.5rem", marginBottom: "20px", fontWeight: "bold" }}>
                I am {" "}
                <span style={{ color: "#00ADB5" }}>
                <ReactTyped
                    strings={[
                    "Full Stack Engineer",
                    "Web Developer",
                    "Mobile App Developer",
                    ]}
                    typeSpeed={80}
                    backSpeed={50}
                    loop
                />
                </span>
            </h1>
            <p style={{ fontSize: "1.2rem", maxWidth: "500px", marginBottom: "25px" }}>
                I create modern, responsive web and mobile applications that bring
                ideas to life.
            </p>

            <button
                style={{
                padding: "12px 24px",
                backgroundColor: "#00ADB5",
                color: "white",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
                fontSize: "1rem",
                fontWeight: "bold",
                transition: "0.3s",
                }}
                onMouseOver={(e) => (e.target.style.backgroundColor = "#008891")}
                onMouseOut={(e) => (e.target.style.backgroundColor = "#00ADB5")}
            >
                Hire Me
            </button>
        </div>


      {/* Right Side (Profile Photo) */}
        <div
            style={{
                flex: 1,
                display: "flex",
                justifyContent: "flex-end", // 👈 pushes image to the right
                alignItems: "center", // 👈 vertically center
            }}
            >
            <img
                src={myPhoto}
                alt="My Photo"
                style={{
                width: "420px",
                height: "420px",
                borderRadius: "50%", // 👈 change to "50%" if you want perfect circle
                objectFit: "cover",
                border: "5px #00ADB5 solid",
                outline: "none",     // 👈 remove black outline
                userSelect: "none",
                }}
                draggable="false"
            />
        </div>

    </section>
  );
}

export default Hero;
