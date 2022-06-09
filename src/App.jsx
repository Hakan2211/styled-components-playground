import "./index.css";

import GlobalStyles from "./components/global-styles";
import styled, { ThemeProvider } from "styled-components";
import { useState } from "react";

import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Exercises from "./pages/Exercises";

function App() {
  return (
    <>
      <GlobalStyles />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercises" element={<Exercises />} />
      </Routes>
    </>
  );
}

export default App;
