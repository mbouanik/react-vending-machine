import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import NavBar from "./NavBar";
import Snack from "./Snack";
import Soda from "./Soda";
import Surprise from "./Surprise";

const VendingMachine = () => {
  return (
    <>
      <h1> What do you want to eat</h1>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/soda" element={<Soda />} />
          <Route path="/snack" element={<Snack />} />
          <Route path="/surprise" element={<Surprise />} />
        </Routes>
        <NavBar />
      </BrowserRouter>
    </>
  );
};

export default VendingMachine;
