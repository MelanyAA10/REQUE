import React from "react";
import { services } from "../data/services";

function Services({ onSelectService }) {
  const cardStyle = {
    background: "#1f1f1f",
    color: "#f5f5f5",
    padding: "30px 20px",
    borderRadius: "16px",
    boxShadow: "0 6px 20px rgba(0,0,0,0.4)",
    textAlign: "center",
    minHeight: "240px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    transition: "all 0.3s ease",
  };

  const buttonStyle = {
    background: "linear-gradient(135deg, #43a047, #66bb6a)",
    color: "white",
    border: "none",
    padding: "12px 20px",
    borderRadius: "8px",
    cursor: "pointer",
    marginTop: "auto",
    fontWeight: "600",
    fontSize: "15px",
    transition: "transform 0.2s ease, box-shadow 0.2s ease",
  };

  return (
    <div>
      <h2
        style={{
          textAlign: "center",
          margin: "20px 0 40px",
          color: "#f5f5f5",
          fontSize: "32px",
          fontWeight: "600",
        }}
      >
        Nuestros Servicios
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)", // 👈 siempre 2 columnas
          gap: "35px",
        }}
      >
        {services.map((service) => (
          <div
            key={service.id}
            style={cardStyle}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-6px)";
              e.currentTarget.style.boxShadow = "0 10px 25px rgba(0,0,0,0.6)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 6px 20px rgba(0,0,0,0.4)";
            }}
          >
            <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>
              {service.name}
            </h3>
            <p
              style={{
                color: "#a0a0a0",
                fontSize: "14px",
                marginBottom: "20px",
              }}
            >
              {service.desc}
            </p>
            <button
              onClick={() => onSelectService(service)}
              style={buttonStyle}
              onMouseEnter={(e) => {
                e.target.style.transform = "scale(1.05)";
                e.target.style.boxShadow = "0 4px 12px rgba(0,0,0,0.4)";
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "scale(1)";
                e.target.style.boxShadow = "none";
              }}
            >
              Ver opciones
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;