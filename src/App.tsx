import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import NameAgeCounter from "./pages/NameAgeCounter/NameAgeCounter";
import VoiceAssistant from "./pages/VoiceAssistant/VoiceAssistant";
import { Header } from "./components/Header/Header";

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nameAgeCounter" element={<NameAgeCounter />} />
        <Route path="/voiceAssistant" element={<VoiceAssistant />} />
      </Routes>
    </Router>
  );
};

export default App;

