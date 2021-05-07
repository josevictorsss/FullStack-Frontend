import styled from "styled-components";

export const PlaylistContainer = styled.div`
  background-color: var(--black-50);
  width: 100%;
`;

export const PlaylistCardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  height: 56px;
  width: 100%;
  margin-top: 3vh;
  grid-gap: 50px;
  padding: 0px 16px;
`;

export const MusicTitlePlay = styled.p`
  color: var(--white);
  cursor: pointer;
  &:hover {
    color: green;
  }
`;

export const MusicAlbumPlay = styled.p`
  color: #b3b3b3;
`;

export const CreatedAtPlay = styled.p`
  color: #b3b3b3;
`;
