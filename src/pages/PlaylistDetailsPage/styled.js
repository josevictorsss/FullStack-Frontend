import styled from "styled-components";

export const PlaylistDetailsContainer = styled.div`
  display: flex;
  @media screen and (min-device-width: 320px) and (max-device-width: 420px) {
    flex-direction: column;
  }
`;

export const PlaylistDetailsFeed = styled.div`
  display: flex;
  flex-direction: column;
`;
