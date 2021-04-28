import React, { useState } from "react";
import {
  Box,
  CircularProgress,
  Container,
  CssBaseline,
} from "@material-ui/core";
import Header from "../../components/Header/Header";
import LoginForm from "../../components/LoginForm/LoginForm";

const LoginPage = () => {
  const [loading] = useState(false);

  return (
    <div>
      <Header />
      {loading ? (
        <CircularProgress />
      ) : (
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <LoginForm />
          <Box mt={8}></Box>
        </Container>
      )}
    </div>
  );
};

export default LoginPage;
