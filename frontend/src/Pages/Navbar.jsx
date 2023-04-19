
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Box, Button, Flex, Heading, Image } from "@chakra-ui/react";

import * as types from "../Redux/Auth/actionTypes";
export const Navbar = () => {
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isAuth = useSelector((state) => state.AuthReducer.isAuth);

  const handleLogout = () => {
    navigate("/");
    localStorage.removeItem("token");
    dispatch({ type: types.USER_LOGOUT_SUCCESS });
    window.location.reload();
  };
  


  return (
    <>
      {isAuth || token ? (
        <Box boxShadow="md" p="6">
          <Flex justifyContent={"space-around"} alignItems={"center"}>
            <Link to="/">
              <Heading>Home</Heading>
            </Link>
            <Link>
   
            </Link>

            <Flex alignItems={"center"} justifyContent={"center"}>
              <Image
                w={"40px"}
                h={"40px"}
                src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
                alt="Profile"
              />           
            </Flex>
           
            <Link>
              <Button onClick={handleLogout}>Logout</Button>
            </Link>
          </Flex>
        </Box>
      ) : (
        <Box boxShadow="xl" p="5">
          <Flex justifyContent={"space-around"} alignItems={"center"}>
          
            <Link to="/login">
              <Button>Login</Button>
            </Link>
            <Link to="/signup">
              <Button>Signup</Button>
            </Link>
            <Link to="/dashboard">
              <Button>Dashboard</Button>
            </Link>
           
          </Flex>
        </Box>
      )}
    </>
  );
};
