"use client";

import { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const inputStyle = {
    width: "100%",
    padding: "16px 20px",
    borderRadius: "12px",
    border: "1px solid rgba(2, 0, 99, 0.1)",
    backgroundColor: "#f8faff",
    fontSize: "15px",
    color: "#020063",
    outline: "none",
    transition: "all 0.3s ease",
  };

  return (
    <section
      id="contact"
      style={{ backgroundColor: "#f8faff" }}
    >
      {/* Header */}
      <div
        style={{
          padding: "100px 24px 48px 24px",
          textAlign: "center",
        }}
      >
        <span
          style={{
            display: "inline-block",
            padding: "8px 20px",
            backgroundColor: "rgba(2, 0, 99, 0.05)",
            color: "#020063",
            borderRadius: "100px",
            fontSize: "14px",
            fontWeight: "600",
            marginBottom: "20px",
          }}
        >
          📬 Get In Touch
        </span>
        <h2
          style={{
            fontSize: "clamp(36px, 5vw, 56px)",
            fontWeight: "bold",
            marginBottom: "12px",
            background: "linear-gradient(135deg, #020063 0%, #4338ca 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Contact Us
        </h2>
        <p
          style={{
            fontSize: "16px",
            color: "rgba(2, 0, 99, 0.5)",
            maxWidth: "400px",
            margin: "0 auto",
          }}
        >
          Let's discuss how we can help your business grow
        </p>
      </div>

      {/* Content */}
      <div
        style={{
          padding: "0 24px 100px 24px",
          maxWidth: "1000px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "48px",
            alignItems: "start",
          }}
        >
          {/* Contact Info */}
          <div>
            <h3
              style={{
                fontSize: "24px",
                fontWeight: "bold",
                color: "#020063",
                marginBottom: "24px",
              }}
            >
              Let's Talk
            </h3>
            <p
              style={{
                fontSize: "15px",
                color: "rgba(2, 0, 99, 0.5)",
                lineHeight: "1.7",
                marginBottom: "32px",
              }}
            >
              Have a project in mind? We'd love to hear from you. Send us a message
              and we'll respond as soon as possible.
            </p>

            {/* Contact Items */}
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              {[
                { icon: "📍", label: "Address", value: "Lalitpur, Nepal" },
                { icon: "📧", label: "Email", value: "hello@flosoftwares.com" },
                { icon: "📱", label: "Phone", value: "+977 9800000000" },
              ].map((item, index) => (
                <div
                  key={index}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "16px",
                  }}
                >
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "12px",
                      background: "linear-gradient(135deg, #020063 0%, #4338ca 100%)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "20px",
                      boxShadow: "0 6px 20px rgba(2, 0, 99, 0.2)",
                    }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <p style={{ fontSize: "12px", color: "rgba(2, 0, 99, 0.4)", marginBottom: "2px" }}>
                      {item.label}
                    </p>
                    <p style={{ fontSize: "15px", color: "#020063", fontWeight: "500" }}>
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            style={{
              backgroundColor: "white",
              padding: "32px",
              borderRadius: "24px",
              boxShadow: "0 8px 32px rgba(0, 0, 0, 0.06)",
            }}
          >
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "16px" }}>
              <input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                style={inputStyle}
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                style={inputStyle}
                required
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              style={{ ...inputStyle, marginBottom: "16px" }}
              required
            />
            <textarea
              placeholder="Your Message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              rows={5}
              style={{ ...inputStyle, resize: "none", marginBottom: "24px" }}
              required
            />
            <button
              type="submit"
              style={{
                width: "100%",
                padding: "16px",
                borderRadius: "12px",
                border: "none",
                background: "linear-gradient(135deg, #020063 0%, #4338ca 100%)",
                color: "white",
                fontSize: "16px",
                fontWeight: "600",
                cursor: "pointer",
                boxShadow: "0 8px 24px rgba(2, 0, 99, 0.3)",
                transition: "all 0.3s ease",
              }}
              className="hover:scale-[1.02] hover:shadow-xl"
            >
              Send Message →
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
