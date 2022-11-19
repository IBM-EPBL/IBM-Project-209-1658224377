

import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "../src/screens/Signup";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import { AppProvider } from "./context/AppContext";
import Dashboard from "./screens/Dashboard";
import Login from "./screens/Login";
import Profile from "./screens/Profile";

function App() {
  useEffect(() => {
    window.watsonAssistantChatOptions = {
      integrationID: "89571b34-dad5-4ad7-8997-6f7e4db74736", 
      region: "au-syd", 
      serviceInstanceID: "8d893bea-6198-4677-aca6-2e871cac49db",
      onLoad: function (instance) {
        instance.render();
      },
    };
    setTimeout(function () {
      const t = document.createElement("script");
      t.src =
        "https://web-chat.global.assistant.watson.appdomain.cloud/versions/" +
        (window.watsonAssistantChatOptions.clientVersion || "latest") +
        "/WatsonAssistantChatEntry.js";
      document.head.appendChild(t);
    });
  }, []);
  return (
    <BrowserRouter>
      <AppProvider>
        <Navbar />
        <Alert />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </AppProvider>
    </BrowserRouter>
  );
}

export default App;
