import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../authContext/AuthContext";

const PublicOutlet = () => {
  const { currentUser } = useAuth();
  return !currentUser ? <Outlet /> : <Navigate to="/" />;
};

export default PublicOutlet;
