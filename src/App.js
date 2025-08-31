import React, { useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Login from "./components/Login";
import Register from "./components/Register";
import Services from "./components/Services";
import Subservices from "./components/Subservices";
import { services } from "./data/services";

function App() {
  const [user, setUser] = useState(null);
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [currentScreen, setCurrentScreen] = useState("home");
  const [selectedService, setSelectedService] = useState(null);

  return (
    <div
      style={{
        fontFamily: "'Poppins', sans-serif",
        minHeight: "100vh",
        background: "#121212",
        color: "#f5f5f5",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Header */}
      <Header
        user={user}
        onLoginClick={() => {
          setShowLogin(true);
          setShowRegister(false);
        }}
        onRegisterClick={() => {
          setShowRegister(true);
          setShowLogin(false);
        }}
        onLogout={() => setUser(null)}
        onMenuClick={() => setSidebarOpen(true)}
      />

      {/* Contenido principal */}
      <main style={{ flex: 1, padding: "40px 20px", maxWidth: "1200px", margin: "0 auto" }}>
        {currentScreen === "home" && (
          <Services
            onSelectService={(service) => {
              setSelectedService(service);
              setCurrentScreen("subservices");
            }}
          />
        )}

        {currentScreen === "subservices" && selectedService && (
          <Subservices
            service={selectedService}
            user={user}
            onRequireLogin={() => setShowLogin(true)}
            onBack={() => setCurrentScreen("home")}
          />
        )}

        {showLogin && !user && (
          <Login
            onLogin={(loggedUser) => {
              setUser(loggedUser);
              setShowLogin(false);
            }}
            onSwitchToRegister={() => {
              setShowRegister(true);
              setShowLogin(false);
            }}
            onClose={() => setShowLogin(false)}
          />
        )}

        {showRegister && !user && (
          <Register
            onRegister={(newUser) => {
              setUser(newUser);
              setShowRegister(false);
            }}
            onSwitchToLogin={() => {
              setShowLogin(true);
              setShowRegister(false);
            }}
            onClose={() => setShowRegister(false)}
          />
        )}
      </main>

      {/* Footer */}
      <footer
        style={{
          background: "#1f1f1f",
          padding: "20px",
          textAlign: "center",
          color: "#a0a0a0",
          fontSize: "14px",
        }}
      >
        No hay nombre © 2025
      </footer>
    </div>
  );
}

export default App;