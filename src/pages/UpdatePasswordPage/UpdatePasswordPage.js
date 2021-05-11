import React, { useState } from "react";
import { Box, Container, CssBaseline } from "@material-ui/core";
import Header from "../../components/Header/Header";
import Loading from "../../components/Loading/Loading";
import UpdatePassForm from "../../components/UpdatePassForm/UpdatePassForm";

const UpdatePasswordPage = () => {
  document.title = "Labefy - Update Password";
  const [loading, setLoading] = useState(false);

  return (
    <>
      <Header />
      {loading ? (
        <Loading setLoading={setLoading} />
      ) : (
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <UpdatePassForm />
          <Box mt={8}></Box>
        </Container>
      )}
    </>
  );
};

export default UpdatePasswordPage;
