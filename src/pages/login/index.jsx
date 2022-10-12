import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import api from "../../services/api";
import { useNavigate, Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Logo from "../../assets/Logo.png";
import { DivForm } from "../../styles/div";
import { ButtonRed } from "../../styles/button";
import { LoginContainer } from "./style";
import { StyledLinkRegister } from "../../styles/link";

const Login = () => {
  const formSchema = yup.object().shape({
    email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
    password: yup.string().required("Senha obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    reset,
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const navigate = useNavigate();

  const onsubmit = (data) => {
    api
      .post("/sessions", data)
      .then((response) => {
        window.localStorage.clear();
        window.localStorage.setItem("authToken", response.data.token);
        window.localStorage.setItem("authId", response.data.user.id);
        navigate("/dashboard");
        toast.success("Login realizado com sucesso!");
      })

      .catch((err) => setError(toast.error(err.response.data.message)));
  };

  return (
    <div className="page-login">
      <LoginContainer>
        <img src={Logo} alt="Logo" />
        <DivForm>
          <h2>Login</h2>
          <form onSubmit={handleSubmit(onsubmit)}>
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              placeholder="Digite seu e-mail"
              {...register("email")}
            />
            <p>{errors.email?.message}</p>

            <label htmlFor="password">Senha</label>
            <input
              type="password"
              placeholder="Digite sua senha"
              {...register("password")}
            />
            <p>{errors.password?.message}</p>

            <ButtonRed>Entrar</ButtonRed>

            <Link to="/signup">
              <span>Ainda não possui conta?</span>
            </Link>

            <StyledLinkRegister to="/signup"> Cadastre-se
            </StyledLinkRegister>
          </form>
        </DivForm>
      </LoginContainer>
    </div>
  );
};

export default Login;
