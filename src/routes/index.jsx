import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/dashboard";
import Signup from "../pages/signup";
import Login from "../pages/login";

const ToAuthenticate = () => {
  return (
    <Routes>
       <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
};

export default ToAuthenticate;
