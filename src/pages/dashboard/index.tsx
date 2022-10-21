import { useContext } from "react";
import Logo from "../../assets/Logo.png";
import { DashInfo, DivDash } from "./style";
import { StyledLinkHeader } from "../../styles/link";
import { iUserContext, UserContext } from "../../contexts/UserContext";
import {
  iTechContext,
  iTechInfo,
  TechContext,
} from "../../contexts/TechContext";
import { AiOutlinePlus } from "react-icons/ai";
import { BsTrash } from "react-icons/bs";
import AddModal from "../../components/AddModal";
import EditModal from "../../components/EditModal";

const Dashboard = () => {
  const { user } = useContext<iUserContext>(UserContext);
  const {
    technology,
    isAddModal,
    setAddModal,
    deleteTech,
    isEditModal,
    setEditModal,
    setTechInfo,
  } = useContext<iTechContext>(TechContext);

  function logout() {
    window.localStorage.clear();
  }

  function modalEdite(element: iTechInfo) {
    setTechInfo(element);
    setEditModal(!isEditModal);
  }

  return (
    <>
      {isAddModal && <AddModal />}
      {isEditModal && <EditModal />}
      <DivDash>
        <div className="container-dashboard">
          <div className="dashboard-header">
            <img src={Logo} alt="Logo" />
            <StyledLinkHeader to="/" onClick={logout}>
              Sair
            </StyledLinkHeader>
          </div>

          <div className="container-perfil">
            <div className="dashboard-perfil">
              <h2>Olá, {user?.name}</h2>
              <p>{user?.course_module}</p>
            </div>
          </div>

          <DashInfo>
            <div className="info-header">
              <p>Tecnologias</p>
              <AiOutlinePlus
                className="icon-plus"
                onClick={() => setAddModal(!isAddModal)}
              />
            </div>

            <div className="info-tech">
              {technology.length === 0 ? (
                <h2>Você ainda não tem tecnologias cadastradas :(</h2>
              ) : (
                <ul className="list-tech">
                  {technology.map((tech: iTechInfo) => {
                    return (
                      <li
                        key={tech.id}
                        onClick={() => {
                          modalEdite(tech);
                        }}
                      >
                        <p>{tech.title}</p>
                        <div className="status-tech">
                          <span>{tech.status}</span>
                          <button
                            onClick={() => {
                              deleteTech(tech.id);
                            }}
                          >
                            <BsTrash className="icon-trash" />
                          </button>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
          </DashInfo>
        </div>
      </DivDash>
    </>
  );
};

export default Dashboard;
