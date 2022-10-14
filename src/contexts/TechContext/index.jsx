import { createContext, useEffect, useState } from "react";
import api from "../../services/api";

export const TechContext = createContext({})

export const TechProvider = ({children}) => {
    const [technology, setTechnology] = useState([])
    
    useEffect(() => {
        async function showTechs () {
            const token = localStorage.getItem("tokenUser")

            try{
                api.defaults.headers.authorization = `Bearer ${token}`
                const {data} = await api.get("/profile")
                setTechnology(data.techs)
            }
            catch(error) {
                console.log(error)
            }
        }
        showTechs()
    }, [technology])

    return (
        <TechContext.Provider value={{technology}}>
            {children}
        </TechContext.Provider>
    )
}