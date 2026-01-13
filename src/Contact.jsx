import React, { useRef } from "react";

function Contact() {
  const formRef = useRef();

 const sendEmail = async (e) => {
  e.preventDefault();

  const formData = new FormData(formRef.current);

  const data = {
    user_name: formData.get("user_name"),
    user_email: formData.get("user_email"),
    user_message: formData.get("user_message"),
  };

  try {
    const res = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const result = await res.json();

    if (result.success) {
      alert("Message sent successfully!");
      formRef.current.reset();
    } else {
      alert("Failed to send message");
    }
  } catch (error) {
    console.error(error);
    alert("Failed to send message");
  }
};



  return (
    <div
      style={{
        backgroundColor: "#dededeff",
        padding: "20px 35vh",
        margin: "0 auto",
        outline: "none",
        userSelect: "none",
      }}
    >
      {/* Heading */}
      <h2
        style={{
          textAlign: "center",
          fontSize: "2.5rem",
          fontWeight: "bold",
          marginBottom: "10px",
          color: "black",
          borderBottom: "4px solid #00ADB5",
          paddingBottom: "6px",
        }}
      >
        Contact
      </h2>

      <p style={{ fontSize: "18px", lineHeight: "1.7", marginBottom: "20px" , color: "black"}}>
        Have a project idea, business requirement, or collaboration in mind?
        Feel free to reach out and I’ll get back to you as soon as possible.
      </p>

      {/* Message Form */}
      <h3
        style={{
          fontSize: "24px",
          fontWeight: "700",
          marginTop: "30px",
          color: "black",
        }}
      >
        Send a Message
      </h3>

      <form ref={formRef} onSubmit={sendEmail}>
        <input
          type="text"
          name="user_name"
          placeholder="Your Name"
          required
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "15px",
            borderRadius: "6px",
            border: "1px solid #1f1f1fff",
            backgroundColor: "#dededeff",
            color: "#1f1f1fff",
            fontSize: "16px",
          }}
        />

        <input
          type="email"
          name="user_email"
          placeholder="Your Email"
          required
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "15px",
            borderRadius: "6px",
            border: "1px solid #1f1f1fff",
            backgroundColor: "#dededeff",
            color: "#1f1f1fff",
            fontSize: "16px",
          }}
        />

        <textarea
          name="user_message"
          placeholder="Your Message"
          rows="5"
          required
          style={{
            width: "100%",
            padding: "12px",
            borderRadius: "6px",
            border: "1px solid #1f1f1fff",
            color: "#1f1f1fff",
            backgroundColor: "#dededeff",
            fontSize: "16px",
            resize: "none",
            marginBottom: "20px",
          }}
        />

        <button
          type="submit"
          style={{
            padding: "10px 25px",
            backgroundColor: "#00ADB5",
            color: "#1f1f1fff",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontSize: "16px",
            alignItems: "center",
          }}
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;
