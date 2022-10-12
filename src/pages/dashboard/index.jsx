import { useEffect, useState } from "react";
import api from "../../services/api";
import Logo from "../../assets/Logo.png";
import { DivDash, DivLoad } from "./style";
import { StyledLinkHeader } from "../../styles/link";

const Dashboard = () => {
  const [user, setUser] = useState({});
  const [load, setLoad] = useState(true);

  function logout() {
    window.localStorage.clear();
  }

  useEffect(() => {
    setLoad(true);

    const id = window.localStorage.getItem("authId");

    api
      .get(`/users/${id}`)
      .then((response) => {
        setUser(response.data);
        setLoad(false);
      })
      .catch((err) => err);
  }, []);

  return (
    <>
      {load ? (
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
