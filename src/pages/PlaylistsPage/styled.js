import styled from "styled-components";

export const PlaylistsContainer = styled.div`
  display: flex;
  @media screen and (min-device-width: 320px) and (max-device-width: 420px) {
    flex-direction: column;
  }
`;

export const PlaylistsFeedContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ErrorMessage = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 250px;
  color: var(--white);
`;
