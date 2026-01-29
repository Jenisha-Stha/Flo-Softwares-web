"use client";

import { useState } from "react";
import { MapPin, Mail, Phone } from "lucide-react";

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
    <section id="contact" style={{ backgroundColor: "#f8faff" }}>
      {/* Header */}
      <div
        className="w-full  pt-2 px-6 py-12 md:pt-[100px] md:pb-12 text-center"
        style={{}}
      >
        <span
          style={{
            display: "inline-block",
            padding: "8px",
            backgroundColor: "rgba(2, 0, 99, 0.05)",
            color: "#020063",
            borderRadius: "100px",
            fontSize: "14px",
            fontWeight: "600",
            marginTop: "40px",
            marginBottom: "20px",
          }}
        >
          Get In Touch
        </span>
        <h2
          style={{
            fontSize: "clamp(32px, 5vw, 48px)",
            fontWeight: "bold",
            marginBottom: "12px",
            color: "#020063",
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
            padding: "2px 20px 15px 20px "
          }}
        >
          Let&apos;s discuss how we can help your business grow
        </p>
      </div>

      {/* Content */}
      <div
        className="w-full p-6 md:pb-[100px] md:px-6 max-w-[1000px] mx-auto text-center"
        style={{
          margin: "0 auto", // Force centering with inline style as backup
        }}
      >
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-[48px] items-start"
          style={{
            display: "grid",
          }}
        >
          {/* Contact Info */}
          <div className="text-center md:text-left flex flex-col items-center md:items-start">
            <h3
              style={{
                fontSize: "24px",
                fontWeight: "bold",
                color: "#020063",
                marginBottom: "24px",
              }}
            >
              Let&apos;s Talk
            </h3>
            <p
              style={{
                fontSize: "15px",
                color: "rgba(2, 0, 99, 0.5)",
                lineHeight: "1.7",
                marginBottom: "32px",
              }}
            >
 apekshyaa
              Have a project in mind? We&apos;d love to hear from you. Send us a message
              and we&apos;ll respond as soon as possible.
              Have a project in mind? We&apos;d love to hear from you. Send us a
              message and we&apos;ll respond as soon as possible.
main
            </p>

            {/* Contact Items */}
            <div style={{ display: "flex", flexDirection: "column", gap: "20px", maxWidth: "400px" }} className="w-full mx-auto md:mx-0 md:max-w-none">
              {[
                { icon: <MapPin size={24} color="white" />, label: "Address", value: "Lalitpur, Nepal" },
                { icon: <Mail size={24} color="white" />, label: "Email", value: "hello@flosoftwares.com" },
                { icon: <Phone size={24} color="white" />, label: "Phone", value: "+977 9800000000" },
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
                      backgroundColor: "#020063",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "20px",
                      boxShadow: "0 6px 20px rgba(2, 0, 99, 0.2)",
                      flexShrink: 0,
                    }}
                  >
                    {item.icon}
                  </div>
                  <div style={{ textAlign: "left" }}>
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
              marginBottom:"70px",
              borderRadius: "24px",
              gap:"10px",
              boxShadow: "0 8px 32px rgba(0, 0, 0, 0.06)",
            }}
          >
            <div
              className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4"
              style={{ display: "grid" }}
            >
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
              style={{ ...inputStyle,marginTop:"16px", marginBottom: "16px" }}
              required
            />
            <textarea
              placeholder="Your Message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              rows={5}
              style={{ ...inputStyle, resize: "none", marginBottom: "16px" }}
              required
            />
            <button
              type="submit"
              style={{
                width: "100%",
                padding: "16px",
                marginBottom:"10px",
                borderRadius: "12px",
                border: "none",
                backgroundColor: "#020063",
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
