import React from "react";

function ServiceModal({ service, onClose, onSelectSubservice }) {
  if (!service) return null;

  return (
    <div style={modalStyle}>
      <div style={modalContent}>
        <button onClick={onClose} style={closeBtn}>
          ✖
        </button>
        <h2>{service.name}</h2>
        <p>Elige una opción:</p>
        <ul style={{ listStyle: "none", padding: 0 }}>
          {service.subservices.map((sub, i) => (
            <li key={i} style={{ margin: "10px 0" }}>
              <button
                onClick={() => onSelectSubservice(sub)}
                style={btnStyle}
              >
                {sub}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

const modalStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  background: "rgba(0,0,0,0.5)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 2000,
};

const modalContent = {
  background: "white",
  padding: "30px",
  borderRadius: "10px",
  width: "300px",
  textAlign: "center",
  position: "relative",
};

const btnStyle = {
  background: "#4CAF50",
  color: "white",
  border: "none",
  padding: "10px 15px",
  borderRadius: "5px",
  cursor: "pointer",
  width: "100%",
};

const closeBtn = {
  position: "absolute",
  top: "10px",
  right: "10px",
  background: "none",
  border: "none",
  fontSize: "18px",
  cursor: "pointer",
};

export default ServiceModal;