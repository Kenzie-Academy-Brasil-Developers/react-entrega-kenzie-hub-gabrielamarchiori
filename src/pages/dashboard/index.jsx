import { useEffect, useState } from "react";
import api from "../../services/api";
import Logo from "../../assets/Logo.png";
import { ButtonHeader } from "../../styles/button";
import { Link } from "react-router-dom";
import "./style.css"

const Dashboard = ({ setIsAuthenticated }) => {
  const [user, setUser] = useState({});
  const [load, setLoad] = useState(true);

  function logout() {
    window.localStorage.clear();
    setIsAuthenticated(false);
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
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      {load ? (
        <div className="carregando">
          <h2>Carregando...</h2>
        </div>
      ) : (
        <div className="page-dashboard">
          <div className="dashboard-header">
            <img src={Logo} alt="Logo" />
            <Link to="/">
              <ButtonHeader onClick={logout}>Sair</ButtonHeader>
            </Link>
          </div>
          <div className="container">
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
      )}
    </>
  );
};

export default Dashboard;
