import {
  CardContainer,
  CreatedAt,
  MusicCardContainer,
  MusicPlaylist,
  MusicTitle,
} from "./styled";

const MusicCard = (props) => {
  console.log(props);
  return (
    <CardContainer>
      <MusicCardContainer>
        <MusicTitle>{props.music.title}</MusicTitle>
        <MusicPlaylist>{props.music.album}</MusicPlaylist>
        <CreatedAt>{props.music.createdAt}</CreatedAt>
      </MusicCardContainer>
    </CardContainer>
  );
};

export default MusicCard;
