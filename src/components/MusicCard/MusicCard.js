import React, { useState } from "react";
import MusicModal from "../MusicModal/MusicModal";
import {
  CardContainer,
  CreatedAt,
  MusicCardContainer,
  MusicPlaylist,
  MusicTitle,
} from "./styled";

const MusicCard = (props) => {
  const { music } = props;
  const [showModal, setShowModal] = useState(false);

  const handleModal = () => {
    setShowModal((prev) => !prev);
  };
  return (
    <CardContainer>
      <MusicCardContainer>
        <MusicTitle onClick={handleModal}>{music.title}</MusicTitle>
        <MusicPlaylist>{music.album}</MusicPlaylist>
        <CreatedAt>{music.createdAt}</CreatedAt>
      <MusicModal
        showModal={showModal}
        setShowModal={setShowModal}
        music={music}
        genres={music.genres}
      />
      </MusicCardContainer>
    </CardContainer>
  );
};

export default MusicCard;
