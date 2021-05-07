import { useHistory } from "react-router";
import { goToPlaylistDetails } from "../../routes/Coordinator";
import {
  PlaylistCardContainer,
  PlaylistCardStyled,
  PlaylistCreated,
  PlaylistDescription,
  PlaylistTitle,
} from "./styled";

const PlaylistCard = (props) => {
  const history = useHistory();
  const { playlist } = props;
  const dataInput = playlist.createdAt;
  const newDate = new Date(dataInput);
  const formatedDate = newDate.toLocaleDateString("pt-BR", { timeZone: "UTC" });
  return (
    <PlaylistCardContainer>
      <PlaylistCardStyled>
        <PlaylistTitle
          onClick={() => goToPlaylistDetails(history, playlist.id)}
        >
          {playlist.title}
        </PlaylistTitle>
        <PlaylistDescription>{playlist.subtitle}</PlaylistDescription>
        <PlaylistCreated>{formatedDate}</PlaylistCreated>
      </PlaylistCardStyled>
    </PlaylistCardContainer>
  );
};

export default PlaylistCard;
