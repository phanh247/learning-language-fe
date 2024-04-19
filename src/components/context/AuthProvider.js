import React, { createContext, useState } from "react";
import { Cookies, useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import axios from "../utils/axios";
import { Cookie } from "@mui/icons-material";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [cookies, setCookie] = useCookies(["user"]);
  const cookkies = new Cookies()
  const navigate = useNavigate();
  const [dataResponse, setDataResponse] = useState([]);
  const [rememberMe, setRememberMe] = useState();
  const LOGIN_URL = "/auth/login";

  async function loginProcess(emailInput, passwordInput) {
    try {
      const response = await axios.post(
        LOGIN_URL,
        {
          email: emailInput,
          password: passwordInput,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setDataResponse(response.data);

      if (
        response.data.statusCode === "BAD_REQUEST" ||
        response.data.statusCode === "FORBIDDEN"
      ) {
        throw new Error(response.data.message);
      }

      setCookie("accessToken", response.data.token);
      setCookie("refreshToken", response.data.refreshToken);
      setUser({
        userName: "UserName",
        isAuthenticated: true,
        role: "ADMIN",
      });
      navigate("/user");
      return true;
    } catch (error) {
      if (error.response) {
        console.error("Server error:", error.response.data);
        return "Server error. Please try again later.";
      } else if (error.request) {
        return "No response from server. Please try again later.";
      } else {
        return false;
      }
    }
  }
  const logout = async () => {
    setUser(null);
    setCookie(null);
    navigate("/login");
  };

  return (
    <AuthContext.Provider value={{ user, setUser, setCookie, loginProcess, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
