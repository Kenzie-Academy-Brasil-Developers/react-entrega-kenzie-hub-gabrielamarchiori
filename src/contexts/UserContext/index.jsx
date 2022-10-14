import { createContext, useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../../services/api";
import {TechContext} from "../TechContext";


export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  const {setTechnology} = useContext(TechContext)

  async function loginUser (data) {
    try {
      const response = await api.post('/sessions', data)

      const {user:infoUser, token} = response.data

      api.defaults.headers.authorization = `Bearer ${token}`

      setUser(infoUser)
      setTechnology(infoUser.techs)
      localStorage.setItem("tokenUser", token)

      const toNavigate = location.state?.from?.pathname || 'dashboard'

      navigate(toNavigate, {replace: true})

      toast.success("Login realizado com sucesso!")
    }
    catch (error) {
        toast.error(error.response.data.message)
    }
  }

  async function registerUser(data) {
    try {
        await api.post("/users", data)
        navigate("/")
        toast.success("Cadastro realizado com sucesso!")
    }
    catch (error) {
        toast.error(error.response.data.message)
    }
  }

  useEffect(() => {
    async function userAuthentication () {
        const token = localStorage.getItem("tokenUser")

        if (token) {
            try {
                api.defaults.headers.authorization = `Bearer ${token}`

                const {data} = await api.get('/profile')
                setUser(data)
                navigate("/dashboard")
            }
            catch(error) {
                console.error(error);
                localStorage.clear()
            }
        }
        setLoading(false)
    }
    userAuthentication()
  }, [])

  return (
   <UserContext.Provider value={{loginUser, registerUser, user, loading}}>
        {children}
   </UserContext.Provider>
  )
};
