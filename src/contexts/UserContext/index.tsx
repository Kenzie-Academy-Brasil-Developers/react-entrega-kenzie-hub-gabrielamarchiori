import axios from "axios";
import { Interface } from "node:readline/promises";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../../services/api";
import { TechContext } from "../TechContext";

interface iUserCountextProps {
  children: React.ReactNode;
}

export interface iUserContext {
  loginUser: (data: iLogin) => void;
  registerUser: (data: iRegister) => void;
  loading: boolean;
  user: iUser | null;
}

export interface iLogin {
  email: string;
  password: string;
}

export interface iRegister {
  email: string;
  password: string;
  confirmpassword: string;
  name: string;
  bio: string;
  contact: string;
  course_module:
    | "Primeiro módulo (Introdução ao Frontend)"
    | "Segundo módulo (Frontend Avançado)"
    | "Terceiro módulo (Introdução ao Backend)"
    | "Quarto módulo (Backend Avançado)";
}

export interface iUser {
  id: string;
  name: string;
  email: string;
  course_module:
    | "Primeiro módulo (Introdução ao Frontend)"
    | "Segundo módulo (Frontend Avançado)"
    | "Terceiro módulo (Introdução ao Backend)"
    | "Quarto módulo (Backend Avançado)";
  bio: string;
  contact: string;
  techs: iTechs[];
}

interface iTechs {
  id: string;
  title: string;
  status: string;
}

export const UserContext = createContext({} as iUserContext);

export const UserProvider = ({ children }: iUserCountextProps) => {
  const [user, setUser] = useState<iUser | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  const { setTechnology } = useContext(TechContext);

  async function loginUser(data: iLogin) {
    try {
      const response = await api.post("/sessions", data);

      const { user: infoUser, token } = response.data;

      api.defaults.headers.authorization = `Bearer ${token}`;

      setUser(infoUser);
      setTechnology(infoUser.techs);
      localStorage.setItem("tokenUser", token);

      const toNavigate = location.state?.from?.pathname || "dashboard";

      navigate(toNavigate, { replace: true });

      toast.success("Login realizado com sucesso!");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error(error.response?.data.message);
      }
    }
  }

  async function registerUser(data: iRegister) {
    try {
      await api.post("/users", data);
      navigate("/");
      toast.success("Cadastro realizado com sucesso!");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error(error.response?.data.message);
      }
    }
  }

  useEffect(() => {
    async function userAuthentication() {
      const token = localStorage.getItem("tokenUser");

      if (token) {
        try {
          api.defaults.headers.authorization = `Bearer ${token}`;

          const { data } = await api.get<iUser>("/profile");
          setUser(data);
          navigate("/dashboard");
        } catch (error) {
          console.error(error);
          localStorage.clear();
        }
      }
      setLoading(false);
    }
    userAuthentication();
  }, []);

  return (
    <UserContext.Provider value={{ loginUser, registerUser, user, loading }}>
      {children}
    </UserContext.Provider>
  );
};
