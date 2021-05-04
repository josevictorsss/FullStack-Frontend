import styled from "styled-components";

export const SubtitleContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  height: 56px;
  width: 87vw;
  grid-gap: 50px;
  padding: 0px 16px;
  background-color: var(--black-50);
`;

export const Subtitle = styled.p`
  margin-top: 20px;
  color: #b3b3b3;
  border-bottom: 1px solid hsla(0, 0%, 100%, 0.1);
`;
