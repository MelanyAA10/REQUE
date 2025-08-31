import React from "react";

function Sidebar({ open, onClose }) {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: open ? 0 : "-250px",
        width: "250px",
        height: "100%",
        background: "#333",
        color: "white",
        padding: "20px",
        transition: "left 0.3s ease",
        zIndex: 1000,
      }}
    >
      <button
        onClick={onClose}
        style={{
          background: "none",
          border: "none",
          color: "white",
          fontSize: "20px",
          cursor: "pointer",
          marginBottom: "20px",
        }}
      >
        ✖
      </button>
      <h3>Menú</h3>
      <ul style={{ listStyle: "none", padding: 0 }}>
        <li style={{ margin: "15px 0" }}>🏠 Inicio</li>
        <li style={{ margin: "15px 0" }}>💆 Promociones</li>
        <li style={{ margin: "15px 0" }}>📞 Contacto</li>
        <li style={{ margin: "15px 0" }}>⭐ Opiniones</li>
      </ul>
    </div>
  );
}

export default Sidebar;