import React from "react";
import logo from "../../assets/logo.png"
import { Container, LogoImg } from "./styled";

const ErrorPage = () => {
  return (
    <>
      <Container>
        <LogoImg src={logo} />
        <h1>Página não encontrada :(</h1>
      </Container>
    </>
  );
};
export default ErrorPage;
