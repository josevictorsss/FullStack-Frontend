import { makeStyles } from "@material-ui/core/styles";
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Typography } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  avatar: {
    marginTop: theme.spacing(20),
    marginLeft: theme.spacing(22),
    backgroundColor: "black",
    "@media (min-device-width: 320px) and (max-device-width: 420px)": {
      marginTop: theme.spacing(5),
    },
  },
}));

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
`;

export const FormContainer = styled.form`
  width: 100%;
  max-width: 400px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const StyledTextField = styled(TextField)`
  border-radius: 5px;
  background-color: #f2f2f2;
`;

export const StyledButton = styled(Button)`
  width: 100%;
`;

export const TitleLogin = styled(Typography)`
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--white);
`;
