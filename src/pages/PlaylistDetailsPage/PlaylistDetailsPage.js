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
import { ErrorMessage } from "../PlaylistsPage/styled";
import {
  InfoContainer,
  InnerInfo,
  LengthP,
  Playlist,
  PlaylistDetailsContainer,
  PlaylistDetailsFeed,
  Point,
  TitlePlaylist,
} from "./styled";

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
          <InfoContainer>
            <Playlist>playlist</Playlist>
            <TitlePlaylist>{data?.playlistInfo?.title}</TitlePlaylist>
            <InnerInfo>
              <p>{data?.playlistInfo?.subtitle}</p>
              <Point>•</Point>
              <LengthP>{data?.musics?.length} músicas</LengthP>
            </InnerInfo>
          </InfoContainer>
          <PlaylistDetailsSubtitles />
          {data?.musics?.length === 0 && (
            <ErrorMessage>
              Você ainda não tem nenhuma música nessa playlist.
            </ErrorMessage>
          )}
          {data ? (
            data.musics.map((music) => {
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
