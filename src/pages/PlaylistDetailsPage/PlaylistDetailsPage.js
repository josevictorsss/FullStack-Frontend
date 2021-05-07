import React from "react";
import { useParams } from "react-router";
import Header from "../../components/Header/Header";
import Loading from "../../components/Loading/Loading";
import OptionsMenu from "../../components/OptionsMenu/OptionsMenu";
import PlaylistDetailCard from "../../components/PlaylistDetailCard/PlaylistDetailCard";
import PlaylistDetailsSubtitles from "../../components/PlaylistDetailsSubtitles/PlaylistDetailsSubtitles";
import { baseUrl } from "../../constants/Urls";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import useRequestData from "../../hooks/useRequestData";
import { PlaylistDetailsContainer, PlaylistDetailsFeed } from "./styled";

const PlaylistDetailsPage = () => {
  useProtectedPage();
  const config = {
    headers: {
      authorization: localStorage.getItem("token"),
    },
  };
  const params = useParams();
  const { data } = useRequestData(
    `${baseUrl}/playlist/all/${params.id}`,
    config,
    undefined
  );
  return (
    <>
      <Header />
      <PlaylistDetailsContainer>
        <OptionsMenu />
        <PlaylistDetailsFeed>
          <PlaylistDetailsSubtitles />
          {data ? (
            data.map((music) => {
              return <PlaylistDetailCard music={music} />;
            })
          ) : (
            <Loading />
          )}
        </PlaylistDetailsFeed>
      </PlaylistDetailsContainer>
    </>
  );
};

export default PlaylistDetailsPage;
