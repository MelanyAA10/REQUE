import React from "react";

function Header({ user, onLoginClick, onRegisterClick, onLogout, onMenuClick }) {
  const buttonStyle = {
    background: "linear-gradient(135deg, #43a047, #66bb6a)", // 👈 verde gradiente
    color: "white",
    border: "none",
    padding: "8px 14px",
    borderRadius: "6px",
    cursor: "pointer",
    fontWeight: "600",
    marginLeft: "10px",
    transition: "transform 0.2s ease, box-shadow 0.2s ease",
  };

  return (
    <header
      style={{
        background: "#1f1f1f",
        color: "white",
        padding: "15px 30px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        boxShadow: "0 2px 6px rgba(0,0,0,0.4)",
      }}
    >
      {/* Botón menú hamburguesa */}
      <button
        onClick={onMenuClick}
        style={{
          background: "none",
          border: "none",
          color: "white",
          fontSize: "24px",
          cursor: "pointer",
        }}
      >
        ☰
      </button>

      <h1 style={{ margin: 0, fontSize: "22px", fontWeight: "600" }}>No hay nombre</h1>

      <nav>
        {user ? (
          <>
            <span style={{ marginRight: "15px", fontSize: "14px" }}>
              Bienvenido, {user.email}
            </span>
            <button
              onClick={onLogout}
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
              Cerrar sesión
            </button>
          </>
        ) : (
          <>
            <button
              onClick={onLoginClick}
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
              Iniciar sesión
            </button>
            <button
              onClick={onRegisterClick}
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
              Registrarse
            </button>
          </>
        )}
      </nav>
    </header>
  );
}

export default Header;