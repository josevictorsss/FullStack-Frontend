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

export const Playlist = styled.p`
  color: var(--white);
  text-transform: uppercase;
  font-size: 12px;
  margin-top: 4px;
  font-weight: 700;
`;

export const TitlePlaylist = styled.h1`
  color: var(--white);
  padding: 0.08em 0px;
  font-size: 96px;
  line-height: 96px;
  visibility: visible;
  width: 100%;
  font-weight: 900;
  letter-spacing: -0.04em;
  @media screen and (min-device-width: 320px) and (max-device-width: 420px) {
    font-size:50px;
  }
`;

export const InnerInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  color: var(--white);
`;

export const Point = styled.p`
  margin: 0 4px;
  color: #b3b3b3;
`;

export const InfoContainer = styled.div`
  padding: 10px 16px 20px;
  background-color:var(--black-50);
`

export const LengthP = styled.p`
  color:#b3b3b3;
`
