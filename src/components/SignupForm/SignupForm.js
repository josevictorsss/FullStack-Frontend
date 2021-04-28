import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import {
  Avatar,
  Button,
  Grid,
  Link,
  TextField,
  CircularProgress,
  Typography,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { useStyles } from "./styled";
import useForm from "../../hooks/useForm";
import { goToLogin } from "../../routes/Coordinator";
import { signUp } from "../../services/User";

const SignupForm = () => {
  const history = useHistory();
  const { form, changeState, clearInput } = useForm({
    name: "",
    email: "",
    nickname: "",
    password: "",
  });
  const classes = useStyles();
  const [loading, setLoading] = useState(false);

  const handleSignup = (event) => {
    event.preventDefault();
    signUp(form, history, setLoading);
    clearInput();
  };

  return (
    <div className={classes.paper}>
      <Avatar className={classes.avatar}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Cadastre-se
      </Typography>
      <form className={classes.form} noValidate onSubmit={handleSignup}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              autoComplete="name"
              name="name"
              variant="outlined"
              required
              fullWidth
              id="name"
              label="Nome de usuário"
              autoFocus
              value={form.username}
              onChange={changeState}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="email"
              label="Endereço de Email"
              name="email"
              autoComplete="email"
              onChange={changeState}
              value={form.email}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="nickname"
              label="Nickname"
              name="nickname"
              autoComplete="email"
              onChange={changeState}
              value={form.nickname}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              name="password"
              label="Senha"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={changeState}
              value={form.password}
            />
          </Grid>
        </Grid>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
        >
          {loading ? <CircularProgress /> : <>CADASTRAR</>}
        </Button>
        <Grid container justify="flex-end">
          <Grid item>
            <Link href="#" variant="body2" onClick={() => goToLogin(history)}>
              Já tem uma conta? Entre aqui.
            </Link>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default SignupForm;
