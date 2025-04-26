import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Components/Home";
import About from "../Components/About";
import Login from "../Components/Login";
import Products from "../Components/Products";
import Description from "../Components/Description";
import Privatepage from "../Components/Privatepage";

const Allroutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/products"
          element={
            <Privatepage>
              <Products />
            </Privatepage>
          }
        />

        <Route path="/description/:id" element={<Description />} />
      </Routes>
    </div>
  );
};

export default Allroutes;
