import React, { useState } from "react";
import { Box, Container, CssBaseline } from "@material-ui/core";
import Header from "../../components/Header/Header";
import LoginForm from "../../components/LoginForm/LoginForm";
import Loading from "../../components/Loading/Loading";
import { MainContainer } from "./styled";

const LoginPage = () => {
  document.title="Labefy - Login"
  const [loading, setLoading] = useState(false);

  return (
    <MainContainer>
      <Header />
      {loading ? (
        <Loading setLoading={setLoading} />
      ) : (
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <LoginForm />
          <Box mt={8}></Box>
        </Container>
      )}
    </MainContainer>
  );
};

export default LoginPage;
