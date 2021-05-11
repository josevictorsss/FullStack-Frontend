import React, { useState } from "react";
import SignupForm from "../../components/SignupForm/SignupForm";
import {
  Box,
  CircularProgress,
  Container,
  CssBaseline,
} from "@material-ui/core";
import Header from "../../components/Header/Header";

const SignupPage = () => {
  document.title = "Labefy - Signup";
  const [loading] = useState(false);

  return (
    <div>
      <Header />
      {loading ? (
        <CircularProgress />
      ) : (
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <SignupForm />
          <Box mt={5}></Box>
        </Container>
      )}
    </div>
  );
};

export default SignupPage;
