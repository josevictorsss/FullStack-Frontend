import styled from "styled-components";

export const SubtitleContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  height: 56px;
  width: 88vw;
  grid-gap: 50px;
  padding: 0px 16px;
  background-color: var(--black-50);
  @media screen and (min-device-width: 320px) and (max-device-width: 420px) {
    width: 100%;
  }
`;

export const Subtitle = styled.p`
  margin-top: 20px;
  color: #b3b3b3;
  border-bottom: 1px solid hsla(0, 0%, 100%, 0.1);
`;
