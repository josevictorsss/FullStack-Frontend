import { useHistory } from "react-router";
import { useState } from "react";
import useForm from "../../hooks/useForm";
import { goToSignup } from "../../routes/Coordinator";
import { login } from "../../services/User";
import { Avatar, CircularProgress, Grid, Link } from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import {
  useStyles,
  Container,
  FormContainer,
  StyledTextField,
  StyledButton,
  TitleLogin,
} from "./styled";

const LoginForm = () => {
  const history = useHistory();
  const { form, changeState, clearInput } = useForm({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const classes = useStyles();

  const handleLogin = (event) => {
    event.preventDefault();
    login(form, history, setLoading);
    clearInput();
  };

  return (
    <Container>
      <Avatar className={classes.avatar}>
        <LockOutlinedIcon />
      </Avatar>
      <TitleLogin component="h1" variant="h5">
        Entre com sua conta
      </TitleLogin>
      <FormContainer onSubmit={handleLogin} noValidate>
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
        <StyledTextField
          variant="filled"
          margin="normal"
          required
          fullWidth
          name="password"
          label="Senha"
          type="password"
          id="password"
          autoComplete="current-password"
          value={form.password}
          onChange={changeState}
        />
        <StyledButton
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
        >
          {loading ? <CircularProgress color="secondary" /> : <>CADASTRAR</>}
        </StyledButton>
        <Grid container>
          <Grid item>
            <Link href="#" variant="body2" onClick={() => goToSignup(history)}>
              {"Não tem uma conta? Cadastre-se"}
            </Link>
          </Grid>
        </Grid>
      </FormContainer>
    </Container>
  );
};

export default LoginForm;
