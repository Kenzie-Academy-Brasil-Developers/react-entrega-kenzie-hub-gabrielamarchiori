import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { TechContext } from "../../contexts/TechContext";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { ButtonDarkRed, ButtonRed } from "../../styles/button";

const EditModal = () => {
    const {isEditModal, setEditModal, editTech, deleteTech, techInfo, setTechInfo} = useContext(TechContext)

    const formSchema = yup.object().shape({
        status: yup.string().required("Escolha uma opção"),
      });
    
    const {
       register,
       handleSubmit,
       formState: { errors },
       reset,
    } = useForm({
       resolver: yupResolver(formSchema),
    });

    return (
        <div className="Container-modal">
            <div className="modal">
                <div className="screen-modal">
                    <div className="modal-header">
                        <h3>Tecnologia Detalhes</h3>
                        <IoMdCloseCircleOutline className="icon-close"
                        onClick={() => setEditModal(!isEditModal)}
                        />
                    </div>

                    <form onSubmit={handleSubmit ((formData)=>  editTech(techInfo.id, formData))}>
                        <label htmlFor="title">Nome</label>
                        <input type="text" 
                        placeholder={techInfo.title}
                        disabled/>
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
                        <ButtonDarkRed type="submit">Salvar alterações</ButtonDarkRed> 
                        <ButtonRed onClick={() => deleteTech(techInfo.id)}>Excluir</ButtonRed> 
                    </form>

                </div>
            </div>
        </div>
    )
}

export default EditModal