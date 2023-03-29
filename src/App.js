import React from "react";
import LandingPage from "./components/LandingPage/LandingPage";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import "./app.css";

function App() {
  return (
    <div id="#app" className="app_container">
      <Navbar />
      <LandingPage />
      <Footer />
    </div>
  );
}

export default App;
