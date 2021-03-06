import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: var(--white);
`;

export const LogoImg = styled.img`
  width: 50%;
  margin: 68px 128px 16px;
`;

export const ErrorButton = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  padding: 20px;
  font-size: 16px;
  font-weight: bold;
  transition: 0.5s;
  background-color: royalblue;
  color: blanchedalmond;
  margin-top: 50px;
  :hover {
    background-color: lightslategrey;
    margin-top: -8px;
  }
`;
