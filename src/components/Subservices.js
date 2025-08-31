import React from "react";

function Subservices({ service, user, onRequireLogin, theme, onBack }) {
  const cardStyle = {
    background: theme === "light" ? "white" : "#2a2a2a",
    color: theme === "light" ? "#333" : "#f9f9f9",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
    textAlign: "center",
    minHeight: "350px", // 👈 más alto
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  };

  const handleSelect = (sub) => {
    if (user) {
      alert(`Has reservado: ${sub.name}`);
    } else {
      onRequireLogin();
    }
  };

  return (
    <div>
      <button
        onClick={onBack}
        style={{
          marginBottom: "20px",
          background: "#4CAF50",
          color: "white",
          border: "none",
          padding: "10px 15px",
          borderRadius: "6px",
          cursor: "pointer",
        }}
      >
        ← Volver
      </button>
      <h2 style={{ textAlign: "center", margin: "20px 0" }}>
        {service.name} - Opciones
      </h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", // 👈 más ancho
          gap: "25px",
        }}
      >
        {service.subservices.map((sub, i) => (
          <div key={i} style={cardStyle}>
            <img
              src={sub.img}
              alt={sub.name}
              style={{
                width: "100%",
                height: "220px", // 👈 más alto
                objectFit: "cover",
                borderRadius: "10px",
                marginBottom: "15px",
              }}
            />
            <h3>{sub.name}</h3>
            <button
              onClick={() => handleSelect(sub)}
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
              Seleccionar
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Subservices;