import React from "react";
import { useHistory } from "react-router";
import logo from "../../assets/logo.png";
import Header from "../../components/Header/Header";
import { goToLogin } from "../../routes/Coordinator";
import { Container, LogoImg, ErrorButton } from "./styled";

const ErrorPage = () => {
  document.title = "Error";
  const history = useHistory();
  return (
    <>
      <Header />
      <Container>
        <LogoImg src={logo} alt="Error" />
        <h1>Página não encontrada :(</h1>
        <ErrorButton onClick={() => goToLogin(history)}>
          {" "}
          VOLTE A PÁGINA INICIAL
        </ErrorButton>
      </Container>
    </>
  );
};
export default ErrorPage;
