import styled from "styled-components";
import CloseIcon from "@material-ui/icons/Close";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

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
  z-index: 10;
  border-radius: 10px;
  margin-bottom: 400px;
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

export const Container = styled.div`
  display: flex;
  justify-content: center;
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
  width: 100%;
  border-radius: 5px;
  background-color: #f2f2f2;
`;

export const StyledButton = styled(Button)`
  width: 100%;
`;
