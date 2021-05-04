import React from "react";
import logo from "../../assets/logo.png";
import Header from "../../components/Header/Header";
import { Container, LogoImg } from "./styled";

const ErrorPage = () => {
  document.title = "Error";
  return (
    <>
      <Header />
      <Container>
        <LogoImg src={logo} />
        <h1>Página não encontrada :(</h1>
      </Container>
    </>
  );
};
export default ErrorPage;
