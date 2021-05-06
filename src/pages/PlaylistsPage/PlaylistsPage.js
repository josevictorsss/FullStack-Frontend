import React from "react";
import PlaylistSubtitles from "../../components/PlaylistSubtitles/PlaylistSubtitles";
import Header from "../../components/Header/Header";
import OptionsMenu from "../../components/OptionsMenu/OptionsMenu";
import { PlaylistsContainer } from "./styled";

const PlaylistsPage = () => {
  return (
    <>
      <Header />
      <PlaylistsContainer>
        <OptionsMenu />
        <PlaylistSubtitles />
      </PlaylistsContainer>
    </>
  );
};

export default PlaylistsPage;
