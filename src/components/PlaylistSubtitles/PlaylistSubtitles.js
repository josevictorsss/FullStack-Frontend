import React from "react";
import { PlaylistSubtitle, PlaylistSubtitleContainer } from "./styled";

const PlaylistSubtitles = () => {
  return (
    <PlaylistSubtitleContainer>
      <PlaylistSubtitle>TÍTULO</PlaylistSubtitle>
      <PlaylistSubtitle>DESCRIÇÃO</PlaylistSubtitle>
      <PlaylistSubtitle>CRIADO EM</PlaylistSubtitle>
    </PlaylistSubtitleContainer>
  );
};

export default PlaylistSubtitles;
