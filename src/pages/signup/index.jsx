import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import api from "../../services/api";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { DivForm, DivHeader } from "../../styles/div";
import { ButtonDarkRed } from "../../styles/button";
import Logo from "../../assets/Logo.png";
import { RegisterContainer } from "./style";
import { StyledLinkHeader } from "../../styles/link";

const Signup = () => {
  const forSchema = yup.object().shape({
    email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
    password: yup
      .string()
      .matches(/[A-Z]/, "Deve conter ao menos 1 letra maiúscula")
      .matches(/[a-z]/, "Deve conter ao menos 1 letra minuscula")
      .matches(/(\d)/, "Deve conter ao menos um número")
      .matches(/(\W)|_/, "Deve conter um caracter especial")
      .matches(/.{8,}/, "Deve ter no minimo 8 digitos")
      .required("Senha é obrigatória"),
    confirmpassword: yup
      .string()
      .oneOf(
        [yup.ref("password")],
        "Confirmação de senha deve ser igual a senha"
      ),
    name: yup.string().required("Nome obrigatório"),
    bio: yup.string().required("Bio obrigatória"),
    contact: yup.string().required("Contato obrigatório"),
    course_module: yup.string().required("Escolha uma opção"),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(forSchema),
  });

  const navigate = useNavigate();

  const onSubmit = (data) => {
    api
      .post("/users", data)
      .then((response) => {
        response;
        navigate("/");
        toast.success("Cadastrado com sucesso!!");
      })
      .catch((error) => {
        error;
        toast.error(error.response.data.message);
      });
  };

  return (
    <div className="page-register">
      <RegisterContainer>
        <DivHeader>
          <img src={Logo} alt="Logo" />
          <StyledLinkHeader to="/">
            Voltar
          </StyledLinkHeader>
        </DivHeader>

        <DivForm>
          <h2>Crie sua conta</h2>
          <span>Rapido e grátis, vamos nessa</span>
          <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="name">Nome</label>
            <input
              type="text"
              placeholder="Digite seu nome"
              {...register("name")}
            />
            <p>{errors.name?.message}</p>

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

            <label htmlFor="confirmpassword">Confirme sua senha</label>
            <input
              type="password"
              placeholder="Confirme sua senha"
              {...register("confirmpassword")}
            />
            <p>{errors.confirmpassword?.message}</p>

            <label htmlFor="bio">Bio</label>
            <input
              type="text"
              placeholder="Fale sobre você"
              {...register("bio")}
            />
            <p>{errors.bio?.message}</p>

            <label htmlFor="contact">Contato</label>
            <input
              type="text"
              placeholder="Opção de contato"
              {...register("contact")}
            />
            <p>{errors.contact?.message}</p>

            <label htmlFor="course_module">Selecionar Módulo</label>
            <select
              name="course_module"
              id="course_module"
              {...register("course_module")}
            >
              <option value="">Selecione um módulo</option>
              <option value="Primeiro módulo (Introdução ao Frontend)">
                Primeiro Módulo
              </option>
              <option value="Segundo módulo (Frontend Avançado)">
                Segundo Módulo
              </option>
              <option value="Terceiro módulo (Introdução ao Backend)">
                Terceiro Módulo
              </option>
              <option value="Quarto módulo (Backend Avançado)">
                Quarto Módulo
              </option>
            </select>
            <p>{errors.course_module?.message}</p>

            <ButtonDarkRed>Cadastrar</ButtonDarkRed>
          </form>
        </DivForm>
      </RegisterContainer>
    </div>
  );
};

export default Signup;
