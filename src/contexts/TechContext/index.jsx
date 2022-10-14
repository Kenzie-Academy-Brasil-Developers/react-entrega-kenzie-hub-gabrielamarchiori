import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import api from "../../services/api";

export const TechContext = createContext({});

export const TechProvider = ({ children }) => {
  const [technology, setTechnology] = useState([]);
  const [isAddModal, setAddModal] = useState(false)
  const [isEditModal, setEditModal] = useState(false)
  const [techInfo, setTechInfo] = useState(null)

  useEffect(() => {
    async function showTechs() {
      const token = localStorage.getItem("tokenUser");

      try {
        api.defaults.headers.authorization = `Bearer ${token}`;
        const { data } = await api.get("/profile");
        setTechnology(data.techs);
      } catch (error) {
        console.log(error);
      }
    }
    showTechs();
  }, [technology]);

  async function addTech (data) {
    const token = localStorage.getItem("tokenUser")

    try {
      api.defaults.headers.authorization = `Bearer ${token}`

      await api.post("/users/techs", data)
      setAddModal(false)
      toast.success("Tecnologia cadastrada com sucesso!")
    }
    catch(error) {
      toast.error(error.response.data.message)
    }
  }

  async function deleteTech(id) {
    const token = localStorage.getItem("tokenUser")

    try {
      api.defaults.headers.authorization = `Bearer ${token}`

      await api.delete(`/users/techs/${id}`)

      toast.success("Tecnologia deletada com sucesso!!")
    }
    catch (error) {
      toast.error(error.response.data.message)
    }
  }

  async function editTech (id, data) {
    const token = localStorage.getItem("tokenUser")

    try {
      api.defaults.headers.authorization = `Bearer ${token}`

      await api.put(`/users/techs/${id}`, data);
      setEditModal(false)
      toast.success("Tecnologia editada com sucesso!!");
    }
    catch(error) {
      toast.error(error.response.data.message)
    }
  }

  return (
    <TechContext.Provider value={{ technology, setTechnology, isAddModal, setAddModal, addTech, deleteTech, isEditModal, setEditModal,techInfo, setTechInfo, editTech }}>
      {children}
    </TechContext.Provider>
  );
};
