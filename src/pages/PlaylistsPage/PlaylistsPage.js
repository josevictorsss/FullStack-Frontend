import React from "react";
import PlaylistSubtitles from "../../components/PlaylistSubtitles/PlaylistSubtitles";
import Header from "../../components/Header/Header";
import OptionsMenu from "../../components/OptionsMenu/OptionsMenu";
import {
  ErrorMessage,
  PlaylistsContainer,
  PlaylistsFeedContainer,
} from "./styled";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import useRequestData from "../../hooks/useRequestData";
import { baseUrl } from "../../constants/Urls";
import Loading from "../../components/Loading/Loading";
import PlaylistCard from "../../components/PlaylistCard/PlaylistCard";

const PlaylistsPage = () => {
  document.title = "Playlists - Labefy";
  useProtectedPage();

  const config = {
    headers: {
      authorization: localStorage.getItem("token"),
    },
  };
  
  const { data } = useRequestData(`${baseUrl}/playlist/`, config, undefined);

  return (
    <>
      <Header />
      <PlaylistsContainer>
        <OptionsMenu />
        <PlaylistsFeedContainer>
          <PlaylistSubtitles />
          {data && data.length === 0 && (
            <ErrorMessage>Você ainda não tem nenhuma playlist</ErrorMessage>
          )}
          {data ? (
            data.map((playlist) => {
              return <PlaylistCard key={playlist.id} playlist={playlist} />;
            })
          ) : (
            <Loading />
          )}
        </PlaylistsFeedContainer>
      </PlaylistsContainer>
    </>
  );
};

export default PlaylistsPage;
