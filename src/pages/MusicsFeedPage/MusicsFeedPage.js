import React, { useState } from "react";
import Header from "../../components/Header/Header";
import MusicCard from "../../components/MusicCard/MusicCard";
import OptionsMenu from "../../components/OptionsMenu/OptionsMenu";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import { ErrorMessage, FeedContainer, MusicsContainer } from "./styled";
import useRequestData from "../../hooks/useRequestData";
import { baseUrl } from "../../constants/Urls";
import Subtitles from "../../components/Subtitles/Subtitles";
import Loading from "../../components/Loading/Loading";
import MusicModal from "../../components/MusicModal/MusicModal";

const MusicsFeedPage = () => {
  document.title = "Feed";
  useProtectedPage();
  const config = {
    headers: {
      authorization: localStorage.getItem("token"),
    },
  };
  const { data } = useRequestData(`${baseUrl}/music/all`, config, undefined);
  const [showModal, setShowModal] = useState(false);

  const openMusicModal = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <>
      <Header />
      <FeedContainer>
        <OptionsMenu/>
        <MusicsContainer>
          <Subtitles />
          {data && data.length === 0 && (
            <ErrorMessage>Você ainda não tem nenhuma música.</ErrorMessage>
          )}
          {data ? (
            data.map((music) => {
              return (
                <>
                  <MusicCard
                    key={music.id}
                    music={music}
                    handleModal={openMusicModal}
                  />
                  <MusicModal
                    showModal={showModal}
                    setShowModal={setShowModal}
                    music={music}
                    genres={music.genres}
                  />
                </>
              );
            })
          ) : (
            <Loading />
          )}
        </MusicsContainer>
      </FeedContainer>
    </>
  );
};

export default MusicsFeedPage;
