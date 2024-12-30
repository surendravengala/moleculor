// src/App.js
import React from "react";
import "./App.css";
import AnnouncementBar from "./components/AnnouncementBar";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <AnnouncementBar />
      <Header />
    </div>
  );
}

export default App;
