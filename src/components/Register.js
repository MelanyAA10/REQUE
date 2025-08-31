import React, { useState } from "react";

function Register({ onRegister, onSwitchToLogin, onClose }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    if (email && password) {
      onRegister({ email });
    } else {
      alert("Completa todos los campos");
    }
  };

  return (
    <div style={overlayStyle}>
      <div style={cardStyle}>
        <button onClick={onClose} style={closeBtn}>✖</button>
        <h2 style={{ marginBottom: "20px" }}>Registro</h2>
        <form onSubmit={handleRegister}>
          <input
            type="email"
            placeholder="Correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={inputStyle}
          />
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={inputStyle}
          />
          <button type="submit" style={buttonStyle}>
            Registrarse
          </button>
        </form>
        <p style={{ marginTop: "15px", color: "#a0a0a0" }}>
          ¿Ya tienes cuenta?{" "}
          <button onClick={onSwitchToLogin} style={linkBtn}>
            Inicia sesión
          </button>
        </p>
      </div>
    </div>
  );
}

const overlayStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  background: "rgba(0,0,0,0.7)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 2000,
};

const cardStyle = {
  background: "#1f1f1f",
  color: "#f5f5f5",
  padding: "40px 30px",
  borderRadius: "16px",
  width: "350px",
  textAlign: "center",
  boxShadow: "0 8px 24px rgba(0,0,0,0.6)",
  position: "relative",
};

const inputStyle = {
  width: "100%",
  padding: "12px",
  margin: "10px 0",
  borderRadius: "8px",
  border: "1px solid #333",
  background: "#2a2a2a",
  color: "#f5f5f5",
  fontSize: "14px",
};

const buttonStyle = {
  background: "linear-gradient(135deg, #43a047, #66bb6a)",
  color: "white",
  border: "none",
  padding: "12px",
  width: "100%",
  borderRadius: "8px",
  cursor: "pointer",
  fontWeight: "600",
  marginTop: "15px",
};

const linkBtn = {
  background: "none",
  border: "none",
  color: "#66bb6a",
  cursor: "pointer",
  fontWeight: "600",
};

const closeBtn = {
  position: "absolute",
  top: "10px",
  right: "10px",
  background: "none",
  border: "none",
  color: "#f5f5f5",
  fontSize: "18px",
  cursor: "pointer",
};

export default Register;