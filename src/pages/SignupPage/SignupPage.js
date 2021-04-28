import SignupForm from "../../components/SignupForm/SignupForm";
import {
  Box,
  CircularProgress,
  Container,
  CssBaseline,
} from "@material-ui/core";
import Header from "../../components/Header/Header";
import React, { useState } from "react";

const SignupPage = () => {
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
