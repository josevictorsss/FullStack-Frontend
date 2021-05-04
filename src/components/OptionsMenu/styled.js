import styled from "styled-components";

export const MainContainer = styled.div`
  background-color: var(--black-100);
  min-width: 12vw;
  height: 95vh;
  padding: 16px;
`;

export const OptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Options = styled.div`
  color: var(--white);
  align-items: center;
  justify-content: center;
  margin-top: 40px;
  margin-left: 10px;
`;

export const Option = styled.span`
  margin-left: 5px;
  margin-bottom: 100px;
  cursor: pointer;
`;
