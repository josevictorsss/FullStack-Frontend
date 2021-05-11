import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 15vh;
  width: 100%;
  @media screen and (min-device-width: 320px) and (max-device-width: 420px) {
    margin-top: 0;
  }
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
