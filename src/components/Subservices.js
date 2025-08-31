import React from "react";

function Subservices({ service, user, onRequireLogin, onBack }) {
  const cardStyle = {
    background: "#1f1f1f",
    color: "#f5f5f5",
    padding: "25px",
    borderRadius: "16px",
    boxShadow: "0 6px 20px rgba(0,0,0,0.4)",
    textAlign: "center",
    minHeight: "160px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    transition: "all 0.3s ease",
  };

  const buttonStyle = {
    background: "linear-gradient(135deg, #43a047, #66bb6a)",
    color: "white",
    border: "none",
    padding: "10px 18px",
    borderRadius: "8px",
    cursor: "pointer",
    marginTop: "15px",
    fontWeight: "600",
    fontSize: "14px",
    transition: "transform 0.2s ease, box-shadow 0.2s ease",
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
          marginBottom: "25px",
          background: "linear-gradient(135deg, #43a047, #66bb6a)",
          color: "white",
          border: "none",
          padding: "10px 18px",
          borderRadius: "8px",
          cursor: "pointer",
          fontWeight: "600",
        }}
      >
        ← Volver
      </button>
      <h2
        style={{
          textAlign: "center",
          margin: "20px 0 40px",
          color: "#f5f5f5",
          fontSize: "28px",
          fontWeight: "600",
        }}
      >
        {service.name} - Opciones
      </h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "30px",
        }}
      >
        {service.subservices.map((sub, i) => (
          <div
            key={i}
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
            <h3 style={{ fontSize: "18px" }}>{sub.name}</h3>
            <button
              onClick={() => handleSelect(sub)}
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
              Seleccionar
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Subservices;