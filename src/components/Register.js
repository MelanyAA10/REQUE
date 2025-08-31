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
    <div style={modalStyle}>
      <div style={modalContent}>
        <button onClick={onClose} style={closeBtn}>
          ✖
        </button>
        <h2>Registro</h2>
        <form onSubmit={handleRegister}>
          <input
            type="email"
            placeholder="Correo"
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
          <button type="submit" style={btnStyle}>
            Registrarse
          </button>
        </form>
        <p>
          ¿Ya tienes cuenta?{" "}
          <button onClick={onSwitchToLogin} style={linkBtn}>
            Inicia sesión
          </button>
        </p>
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
};

const modalContent = {
  background: "white",
  padding: "30px",
  borderRadius: "10px",
  width: "300px",
  textAlign: "center",
  position: "relative",
};

const inputStyle = {
  display: "block",
  width: "100%",
  margin: "10px 0",
  padding: "8px",
};

const btnStyle = {
  background: "#4CAF50",
  color: "white",
  border: "none",
  padding: "10px",
  width: "100%",
  borderRadius: "5px",
  cursor: "pointer",
};

const linkBtn = {
  background: "none",
  border: "none",
  color: "#4CAF50",
  cursor: "pointer",
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

export default Register;