import React from "react";

function Header({ user, onLoginClick, onRegisterClick, onLogout, onMenuClick }) {
  return (
    <header
      style={{
        background: "#4CAF50",
        color: "white",
        padding: "15px 20px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
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
        [[l☰
      </button>

      <h1 style={{ margin: 0 }}>🌿 No tiene nombre</h1>

      <nav>
        {user ? (
          <>
            <span style={{ marginRight: "15px" }}>
              Bienvenido, {user.email}
            </span>
            <button
              onClick={onLogout}
              style={{
                background: "white",
                color: "#4CAF50",
                border: "none",
                padding: "8px 12px",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Cerrar sesión
            </button>
          </>
        ) : (
          <>
            <button
              onClick={onLoginClick}
              style={{
                marginRight: "10px",
                background: "white",
                color: "#4CAF50",
                border: "none",
                padding: "8px 12px",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Iniciar sesión
            </button>
            <button
              onClick={onRegisterClick}
              style={{
                background: "#fff",
                color: "#4CAF50",
                border: "none",
                padding: "8px 12px",
                borderRadius: "5px",
                cursor: "pointer",
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