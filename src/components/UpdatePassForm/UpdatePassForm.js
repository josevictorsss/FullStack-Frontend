import React, { useState } from "react";
import { useHistory } from "react-router";
import useForm from "../../hooks/useForm";
import { resetPassword } from "../../services/User";
import { Avatar, CircularProgress, Grid, Link } from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import {
  useStyles,
  Container,
  TitleLogin,
  FormContainer,
  StyledTextField,
  StyledButton,
} from "./styled";
import { goToLogin } from "../../routes/Coordinator";

const UpdatePassForm = () => {
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const { form, changeState, clearInput } = useForm({
    email: "",
  });
  const classes = useStyles();

  const handleUpdatePassword = (event) => {
    event.preventDefault();
    resetPassword(form, history, setLoading);
    clearInput();
  };

  return (
    <Container>
      <Avatar className={classes.avatar}>
        <LockOutlinedIcon />
      </Avatar>
      <TitleLogin component="h1" variant="h5">
        Insira o email abaixo
      </TitleLogin>
      <FormContainer onSubmit={handleUpdatePassword} noValidate>
        <StyledTextField
          variant="filled"
          margin="normal"
          required
          fullWidth
          id="email"
          label="Endereço de Email"
          name="email"
          autoComplete="email"
          autoFocus
          value={form.email}
          onChange={changeState}
        />
        <StyledButton
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
        >
          {loading ? <CircularProgress color="secondary" /> : <>ENVIAR</>}
        </StyledButton>
        <Grid container justify="flex-end">
          <Grid item>
            <Link href="#" variant="body2" onClick={() => goToLogin(history)}>
              Já tem uma conta? Entre aqui.
            </Link>
          </Grid>
        </Grid>
      </FormContainer>
    </Container>
  );
};

export default UpdatePassForm;
