import React from "react";
import {
  PlaylistCardContainer,
  PlaylistContainer,
  MusicTitlePlay,
  CreatedAtPlay,
  MusicAlbumPlay,
} from "./styled";

const PlaylistDetailCard = (props) => {
  document.title = `Playlist`;

  const { music } = props;

  const dataInput = music.createdAt;
  const newDate = new Date(dataInput);
  const formatedDate = newDate.toLocaleDateString("pt-BR", { timeZone: "UTC" });

  return (
    <PlaylistContainer>
      <PlaylistCardContainer>
        <MusicTitlePlay>{music.title}</MusicTitlePlay>
        <MusicAlbumPlay>{music.author}</MusicAlbumPlay>
        <CreatedAtPlay>{formatedDate}</CreatedAtPlay>
      </PlaylistCardContainer>
    </PlaylistContainer>
  );
};

export default PlaylistDetailCard;
