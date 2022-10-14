import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import {IoMdCloseCircleOutline} from 'react-icons/io'
import { TechContext } from "../../contexts/TechContext";
import {ButtonRed} from "../../styles/button"

const AddModal = () => {
    const {isAddModal, setAddModal, addTech} = useContext(TechContext)

    const formSchema = yup.object().shape({
        status: yup.string().required("Escolha uma opção"),
        title: yup.string().required("Nome da tecnologia obrigatória")
    })

    const {register, handleSubmit, formState: {errors}, reset} = useForm({
        resolver: yupResolver(formSchema)
    })

    return (
        <div className="Container-modal">
            <div className="modal">
                <div className="screen-modal">
                    <div className="my-modal">
                        
                    </div>
                    <div className="modal-header">
                        <h3>Cadastrar Tecnologia</h3>
                        <IoMdCloseCircleOutline className="icon-close"
                        onClick={() => setAddModal(!isAddModal)}
                        />
                    </div>

                    <form onSubmit={handleSubmit(addTech)}>
                        <label htmlFor="title">Nome</label>
                        <input type="text" 
                        placeholder="Nome da tecnologia"
                        {...register("title")}/>
                        <p>{errors.title?.message}</p>

                        <label htmlFor="status">Selecione um status</label>
                        <select name="status" id="status"
                        {...register("status")}>
                            <option value="">Selecione um</option>
                            <option value="Iniciante">Iniciante</option>
                            <option value="Intermediário">Intermediário</option>
                            <option value="Avançado">Avançado</option>
                        </select>
                        <p>{errors.status?.message}</p>
                        <ButtonRed type="submit">Cadastrar Tecnologia</ButtonRed>   
                    </form>

                </div>
            </div>
        </div>
    )
}

export default AddModal