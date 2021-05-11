import styled from "styled-components";
import CloseIcon from "@material-ui/icons/Close";
import { TextField, DialogActions, Button } from "@material-ui/core";

export const Background = styled.div`
  width: 100%;
  height: 100%;
  background: transparent;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalWrapper = styled.div`
  width: 500px;
  height: 230px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: var(--white);
  color: var(--black-100);
  position: relative;
  margin-right: 500px;
  z-index: 10;
  border-radius: 10px;
  margin-bottom: 400px;
  @media screen and (min-device-width: 320px) and (max-device-width: 420px) {
    width: 300px;
    margin-right: 0px;
  }
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  color: #141414;
`;

export const CloseModalButton = styled(CloseIcon)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`;

export const DialogContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FlexForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 85vw;
  max-width: 100%;
  padding: 20px;
`;

export const StyledTextField = styled(TextField)`
  width: 100%;
`;

export const StyledDialogActions = styled(DialogActions)`
  margin: 16px;
`;

export const StyledButton = styled(Button)`
  background-color: black;
  color: var(--white);
`;
