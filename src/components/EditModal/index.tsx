import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { iTechContext, TechContext } from "../../contexts/TechContext";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { ButtonDarkRed, ButtonGrey, ButtonRed } from "../../styles/button";
import { DivForm } from "../../styles/div";
import { DivModal } from "../../styles/modal";

interface editeModal {
  status: string;
}

const EditModal = () => {
  const {
    isEditModal,
    setEditModal,
    editTech,
    deleteTech,
    techInfo,
    setTechInfo,
  } = useContext<iTechContext>(TechContext);

  const formSchema = yup.object().shape({
    status: yup.string().required("Escolha uma opção"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<editeModal>({
    resolver: yupResolver(formSchema),
  });

  return (
    <DivModal>
      <div className="modal">
        <div className="screen-modal">
          <div className="my-modal">
            <div className="modal-header">
              <h3>Tecnologia Detalhes</h3>
              <IoMdCloseCircleOutline
                className="icon-close"
                onClick={() => setEditModal(!isEditModal)}
              />
            </div>
            <DivForm>
              <form
                onSubmit={handleSubmit((formData: any) =>
                  editTech(techInfo.id, formData)
                )}
              >
                <label htmlFor="title">Nome</label>
                <input type="text" placeholder={techInfo?.title} disabled />

                <label htmlFor="status">Selecione um status</label>
                <select id="status" {...register("status")}>
                  <option value="">Selecione um...</option>
                  <option value="Iniciante">Iniciante</option>
                  <option value="Intermediário">Intermediário</option>
                  <option value="Avançado">Avançado</option>
                </select>
                <p>{errors?.status?.message}</p>
                <div className="buttons-modal">
                  <ButtonDarkRed type="submit">Salvar alterações</ButtonDarkRed>
                  <ButtonGrey onClick={() => deleteTech(techInfo.id)}>
                    Excluir
                  </ButtonGrey>
                </div>
              </form>
            </DivForm>
          </div>
        </div>
      </div>
    </DivModal>
  );
};

export default EditModal;
