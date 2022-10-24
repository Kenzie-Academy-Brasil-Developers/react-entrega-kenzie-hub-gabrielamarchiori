import axios from "axios";
import React, {
  createContext,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { toast } from "react-toastify";
import api from "../../services/api";
import { iUser } from "../UserContext";

interface iUserCountextProps {
  children: React.ReactNode;
}

interface iEditeTech {
  status: string;
}

export interface iTechContext {
  addTech: (data: iAdd) => void;
  deleteTech: (id: string) => void;
  editTech: (id: string, data: iEditeTech) => void;
  isAddModal: boolean;
  setAddModal: React.Dispatch<React.SetStateAction<boolean>>;
  isEditModal: boolean;
  setEditModal: React.Dispatch<React.SetStateAction<boolean>>;
  techInfo: iTechInfo | null ;
  setTechInfo: React.Dispatch<React.SetStateAction<iTechInfo | null>>;
  technology: iTechInfo[] | [];
  setTechnology: React.Dispatch<React.SetStateAction<iTechInfo[] | []>>;
}

export interface iAdd {
  title: string;
  status: string;
}

export interface iTechInfo {
  id: string;
  title: string;
  status: string;
}

export const TechContext = createContext({} as iTechContext);

export const TechProvider = ({ children }: iUserCountextProps) => {
  const [technology, setTechnology] = useState<iTechInfo[]>([] as iTechInfo[]);

  const [isAddModal, setAddModal] = useState(false);
  const [isEditModal, setEditModal] = useState(false);
  const [techInfo, setTechInfo] = useState<iTechInfo | null>(null);

  useEffect(() => {
    async function showTechs() {
      const token = localStorage.getItem("tokenUser");

      try {
        api.defaults.headers.authorization = `Bearer ${token}`;
        const { data } = await api.get<iUser>("/profile");
        setTechnology(data.techs);
      } catch (error) {
        console.log(error);
      }
    }
    showTechs();
  }, [technology]);

  async function addTech(data: iAdd) {
    const token = localStorage.getItem("tokenUser");

    try {
      api.defaults.headers.authorization = `Bearer ${token}`;

      await api.post("/users/techs", data);
      setAddModal(false);
      toast.success("Tecnologia cadastrada com sucesso!");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error(error.response?.data.message);
      }
    }
  }

  async function deleteTech(id: string) {
    const token = localStorage.getItem("tokenUser");

    try {
      api.defaults.headers.authorization = `Bearer ${token}`;

      await api.delete(`/users/techs/${id}`);

      toast.success("Tecnologia deletada com sucesso!!");
      setEditModal(false);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error(error.response?.data.message);
      }
    }
  }

  async function editTech(id: string, data: iEditeTech) {
    const token = localStorage.getItem("tokenUser");

    try {
      api.defaults.headers.authorization = `Bearer ${token}`;

      await api.put(`/users/techs/${id}`, data);
      setEditModal(false);
      toast.success("Tecnologia atualizada com sucesso!!");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error(error.response?.data.message);
      }
    }
  }

  return (
    <TechContext.Provider
      value={{
        technology,
        setTechnology,
        isAddModal,
        setAddModal,
        addTech,
        deleteTech,
        isEditModal,
        setEditModal,
        techInfo,
        setTechInfo,
        editTech,
      }}
    >
      {children}
    </TechContext.Provider>
  );
};
