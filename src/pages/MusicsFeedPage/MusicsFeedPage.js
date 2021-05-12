import React from "react";
import Header from "../../components/Header/Header";
import MusicCard from "../../components/MusicCard/MusicCard";
import OptionsMenu from "../../components/OptionsMenu/OptionsMenu";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import { ErrorMessage, FeedContainer, MusicsContainer } from "./styled";
import useRequestData from "../../hooks/useRequestData";
import { baseUrl } from "../../constants/Urls";
import Subtitles from "../../components/MusicFeedSubtitles/MusicFeedSubtitles";
import Loading from "../../components/Loading/Loading";

const MusicsFeedPage = () => {
  document.title = "Feed";
  useProtectedPage();
  const config = {
    headers: {
      authorization: localStorage.getItem("token"),
    },
  };
  const { data } = useRequestData(`${baseUrl}/music/all`, config, undefined);
  console.log(data);

  return (
    <>
      <Header />
      <FeedContainer>
        <OptionsMenu />
        <MusicsContainer>
          <Subtitles />
          {data && data.length === 0 && (
            <ErrorMessage>Você ainda não tem nenhuma música.</ErrorMessage>
          )}
          {data ? (
            data
              .sort((a, b) => (a.createdAt > b.createdAt ? 1 : -1))
              .map((music) => {
                return (
                  <>
                    <MusicCard key={music.id} music={music} />
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
