import { useHistory } from "react-router";
import { goToDetails } from "../../routes/Coordinator";
import {
  CardContainer,
  CreatedAt,
  MusicCardContainer,
  MusicPlaylist,
  MusicTitle,
} from "./styled";

const MusicCard = (props) => {
  const history = useHistory();
  return (
    <CardContainer>
      <MusicCardContainer onClick={() => goToDetails(history, props.music.id)}>
        <MusicTitle>{props.music.title}</MusicTitle>
        <MusicPlaylist>{props.music.album}</MusicPlaylist>
        <CreatedAt>{props.music.createdAt}</CreatedAt>
      </MusicCardContainer>
    </CardContainer>
  );
};

export default MusicCard;
