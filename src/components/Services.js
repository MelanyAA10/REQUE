import React from "react";
import { services } from "../data/services";

function Services({ theme, onSelectService }) {
  const cardStyle = {
    background: theme === "light" ? "white" : "#2a2a2a",
    color: theme === "light" ? "#333" : "#f9f9f9",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
    textAlign: "center",
    minHeight: "380px", // 👈 más alto
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  };

  return (
    <div>
      <h2 style={{ textAlign: "center", margin: "20px 0" }}>
        Nuestros Servicios
      </h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", // 👈 más ancho
          gap: "25px",
        }}
      >
        {services.map((service) => (
          <div key={service.id} style={cardStyle}>
            <img
              src={service.img}
              alt={service.name}
              style={{
                width: "100%",
                height: "220px", // 👈 más alto
                objectFit: "cover",
                borderRadius: "10px",
                marginBottom: "15px",
              }}
            />
            <h3>{service.name}</h3>
            <p>{service.desc}</p>
            <button
              onClick={() => onSelectService(service)}
              style={{
                background: "#4CAF50",
                color: "white",
                border: "none",
                padding: "12px 18px",
                borderRadius: "6px",
                cursor: "pointer",
                marginTop: "auto",
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