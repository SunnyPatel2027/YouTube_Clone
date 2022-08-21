import React from "react";
import "./App.css";
import Header from "./Header";
import SearchPage from "./SearchPage";
import RecommendedVideos from "./RecommendedVideos";
import Sidebar from "./Sidebar";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      {/* <h1>you tube clone</h1> */}

      <Header />
      <div className="app_page">
        <Sidebar />

        <Routes>
          <Route path="/" element={<RecommendedVideos />}></Route>
          <Route path="/search" element={<SearchPage />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
