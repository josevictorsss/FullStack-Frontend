import React from "react";
import {
  CardContainer,
  CreatedAt,
  MusicCardContainer,
  MusicPlaylist,
  MusicTitle,
} from "./styled";

const MusicCard = (props) => {
  return (
    <CardContainer>
      <MusicCardContainer>
        <MusicTitle onClick={props.handleModal}>{props.music.title}</MusicTitle>
        <MusicPlaylist>{props.music.album}</MusicPlaylist>
        <CreatedAt>{props.music.createdAt}</CreatedAt>
      </MusicCardContainer>
    </CardContainer>
  );
};

export default MusicCard;
