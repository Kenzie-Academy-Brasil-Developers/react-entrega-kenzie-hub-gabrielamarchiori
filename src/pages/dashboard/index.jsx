import { useContext } from "react";
import Logo from "../../assets/Logo.png";
import { DivDash, DivLoad } from "./style";
import { StyledLinkHeader } from "../../styles/link";
import { UserContext } from "../../contexts/UserContext";

const Dashboard = () => {
  const {user, loading} = useContext(UserContext)

  function logout() {
    window.localStorage.clear();
  }

  
  return (
    <>
      {loading ? (
        <DivLoad>
          <h2>Carregando...</h2>
        </DivLoad>
      ) : (
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
              <h2>Que pena! Estamos em desenvolvimento :(</h2>
              <p>
                Nossa aplicação está em desenvolvimento, em breve teremos
                novidades
              </p>
            </div>
          </div>
        </DivDash>
      )}
    </>
  );
};

export default Dashboard;
