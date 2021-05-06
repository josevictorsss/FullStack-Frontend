import {
  PlaylistCardContainer,
  PlaylistCardStyled,
  PlaylistCreated,
  PlaylistDescription,
  PlaylistTitle,
} from "./styled";

const PlaylistCard = (props) => {
  const { playlist } = props;
  return (
    <PlaylistCardContainer>
      <PlaylistCardStyled>
        <PlaylistTitle>{playlist.title}</PlaylistTitle>
        <PlaylistDescription>{playlist.subtitle}</PlaylistDescription>
        <PlaylistCreated>{playlist.createdAt}</PlaylistCreated>
      </PlaylistCardStyled>
    </PlaylistCardContainer>
  );
};

export default PlaylistCard;
