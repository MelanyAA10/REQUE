import React, { useState } from "react";

function Login({ onLogin, onSwitchToRegister, onClose }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (email && password) {
      onLogin({ email });
    } else {
      alert("Por favor ingresa tus credenciales");
    }
  };

  return (
    <div style={modalStyle}>
      <div style={modalContent}>
        <button onClick={onClose} style={closeBtn}>
          ✖
        </button>
        <h2>Iniciar Sesión</h2>
        <form onSubmit={handleLogin}>
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
            Entrar
          </button>
        </form>
        <p>
          ¿No tienes cuenta?{" "}
          <button onClick={onSwitchToRegister} style={linkBtn}>
            Regístrate
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

export default Login;