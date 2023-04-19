import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../Components/Home";
import { Login } from "../Components/Login";
import { Signup } from "../Components/Signup";
import { Dashboard } from "../Pages/Dashboard";

import { Navigate } from "react-router-dom"
export const AllRoutes = () => {

  const [token, settoken] = React.useState(null);
  
const PrivateRoute=({children})=>{

  let data = (localStorage.getItem("token"))

  if (!data) {
    alert(
      "Please Login first")
    
      return <Navigate to="/login" />
    
  }
  return(
      <>
      {children}
      </>
  )
}


  
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/dashboard" element={
            <PrivateRoute token={token}>
              <Dashboard />
            </PrivateRoute>
          }/>

      
    </Routes>
  );
};
