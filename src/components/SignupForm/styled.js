import { Button, TextField, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import styled from "styled-components";

export const useStyles = makeStyles((theme) => ({
  avatar: {
    marginTop: theme.spacing(20),
    marginLeft: theme.spacing(22),
    backgroundColor: "black",
  },
}));

export const StyledTextField = styled(TextField)`
  border-radius: 5px;
  background-color: #f2f2f2;
`;

export const StyledButton = styled(Button)`
  width: 100%;
`;

export const TitleSignup = styled(Typography)`
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--white);
`;

export const FormContainer = styled.form`
  width: 100%;
  max-width: 400px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
