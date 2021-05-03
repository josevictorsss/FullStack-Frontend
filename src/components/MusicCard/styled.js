import styled from "styled-components";

export const CardContainer = styled.div`
  display: grid;
  height: 56px;
  position: relative;
  border: 1px solid white;
  border-radius: 4px;
`;

export const SubtitlesContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  height: 100%;
  width: 100%;
  margin-top: 3vh;
  grid-gap: 50px;
  border-bottom: 1px solid hsla(0, 0%, 100%, 0.1);
  padding: 0px 16px;
`;

export const Subtitle = styled.p`
  color: #b3b3b3;
`;
