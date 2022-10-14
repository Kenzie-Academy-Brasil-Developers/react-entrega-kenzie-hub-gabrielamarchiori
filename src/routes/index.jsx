import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/dashboard";
import Signup from "../pages/signup";
import Login from "../pages/login";
import ProtectedRoutes from "../components/ProtectedRoutes";

const ToAuthenticate = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route element={<ProtectedRoutes/>}>
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>
    </Routes>
  );
};

export default ToAuthenticate;
