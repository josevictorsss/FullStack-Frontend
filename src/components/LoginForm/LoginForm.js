import { useHistory } from "react-router";
import useForm from "../../hooks/useForm";
import { goToSignup } from "../../routes/Coordinator";
import { login } from "../../services/User";
import {
  Avatar,
  Button,
  Grid,
  Link,
  TextField,
  Typography,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { useStyles } from "./styled";
import { useState } from "react";

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
    <div className={classes.paper}>
      <Avatar className={classes.avatar}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Entre com sua conta
      </Typography>
      <form className={classes.form} onSubmit={handleLogin} noValidate>
        <TextField
          variant="outlined"
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
        <TextField
          variant="outlined"
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
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
        >
          <>ENTRAR</>
        </Button>
        <Grid container>
          <Grid item>
            <Link href="#" variant="body2" onClick={() => goToSignup(history)}>
              {"Não tem uma conta? Cadastre-se"}
            </Link>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default LoginForm;
