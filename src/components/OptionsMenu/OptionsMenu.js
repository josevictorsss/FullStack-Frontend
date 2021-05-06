import React, { useState } from "react";
import { MainContainer, Options, OptionsContainer, Option } from "./styled";
import { Home, PlaylistAdd, Queue, Storage } from "@material-ui/icons";
import { goToAddMusic, goToMusics } from "../../routes/Coordinator";
import { useHistory } from "react-router";
import PlaylistModal from "../PlaylistModal/PlaylistModal";

const OptionsMenu = () => {
  const history = useHistory();
  const [showModal, setShowModal] = useState(false);

  const openPlaylistModal = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <MainContainer>
      <PlaylistModal showModal={showModal} setShowModal={setShowModal} />
      <OptionsContainer>
        <Options onClick={() => goToMusics(history)}>
          <Home />
          <Option>Ínicio</Option>
        </Options>
        <Options>
          <Storage />
          <Option>Suas playlists</Option>
        </Options>
        <Options>
          <PlaylistAdd />
          <Option onClick={openPlaylistModal}>Criar playlists</Option>
        </Options>
        <Options onClick={() => goToAddMusic(history)}>
          <Queue />
          <Option>Adicionar música</Option>
        </Options>
      </OptionsContainer>
    </MainContainer>
  );
};

export default OptionsMenu;
