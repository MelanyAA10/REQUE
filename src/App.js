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
  const [theme, setTheme] = useState("light");

  // 👇 Estado para simular navegación
  const [currentScreen, setCurrentScreen] = useState("home");
  const [selectedService, setSelectedService] = useState(null);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const themeStyles = {
    light: { background: "#f9f9f9", color: "#333" },
    dark: { background: "#1e1e1e", color: "#f9f9f9" },
  };

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        minHeight: "100vh",
        ...themeStyles[theme],
      }}
    >
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
        theme={theme}
      />

      <Sidebar
        open={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        theme={theme}
        toggleTheme={toggleTheme}
      />

      <div style={{ padding: "20px", maxWidth: "1000px", margin: "0 auto" }}>
        {currentScreen === "home" && (
          <Services
            theme={theme}
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
            theme={theme}
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
      </div>
    </div>
  );
}

export default App;