import styled from "styled-components";

export const AddContainer = styled.div`
  display: flex;
  width: 100%;
  @media screen and (min-device-width: 320px) and (max-device-width: 420px) {
    flex-direction: column;
  }
`;

export const AddMusicContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-left: 30%;
  @media screen and (min-device-width: 320px) and (max-device-width: 420px) {
    margin-left: 0%;
  }
`;
