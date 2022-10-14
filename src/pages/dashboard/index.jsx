import { useContext } from "react";
import Logo from "../../assets/Logo.png";
import { DivDash, DivLoad } from "./style";
import { StyledLinkHeader } from "../../styles/link";
import { UserContext } from "../../contexts/UserContext";
import { TechContext } from "../../contexts/TechContext";
import { AiOutlinePlus } from "react-icons/ai";
import { BsTrash } from "react-icons/bs";
import AddModal from "../../components/AddModal";

const Dashboard = () => {
  const { user } = useContext(UserContext);
  const { technology, isAddModal, setAddModal, deleteTech } = useContext(TechContext);
  
  function logout() {
    window.localStorage.clear();
  }

  return (
    <>
     
        {isAddModal && <AddModal/>}
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
                <h2>Olá, {user.name}</h2>
                <p>{user.course_module}</p>
              </div>
            </div>

            <div className="dashboard-info">
              <div className="info-header">
                <p>Tecnologias</p>
                <AiOutlinePlus className="icon-plus" 
                onClick={() => setAddModal(!isAddModal)}
                />
              </div>

              <div className="info-tech">
                <ul className="list-tech">
                  {technology.map((tech) => {
                    return (
                      <li key={tech.id}>
                        <p>{tech.title}</p>
                        <div className="status-tech">
                          <span>{tech.status}</span>
                          <BsTrash className="icon-trash"
                          onClick={() => deleteTech(tech.id)}
                          />
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </DivDash>
      </>
  );
};

export default Dashboard;
