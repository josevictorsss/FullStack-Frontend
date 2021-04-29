import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    borderRadius: "5px solid",
    borderColor: "white solid",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "black",
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
    color: "white",
    backgroundColor: "white",
    borderRadius: "5px",
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));
