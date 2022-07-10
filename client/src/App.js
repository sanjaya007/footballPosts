import React, { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Auth from "./components/auth/Auth";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <div className="main-container">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/auth" element={<Auth />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
