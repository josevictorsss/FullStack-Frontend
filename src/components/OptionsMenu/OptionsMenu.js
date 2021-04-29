import { MainContainer, Options, OptionsContainer, Option } from "./styled";
import { Home, PlaylistAdd, Queue, Storage } from "@material-ui/icons";
import { goToAddMusic, goToMusics } from "../../routes/Coordinator";
import { useHistory } from "react-router";

const OptionsMenu = () => {
  const history = useHistory();

  return (
    <MainContainer>
      <OptionsContainer>
        <Options onClick={() => goToMusics(history)}>
          <Home />
          <Option>Ínicio</Option>
        </Options>
        <Options>
          <Storage />
          <Option>Suas playlists</Option>
        </Options>
        <Options>
          <PlaylistAdd />
          <Option>Criar playlists</Option>
        </Options>
        <Options onClick={() => goToAddMusic(history)}>
          <Queue />
          <Option>Adicionar música</Option>
        </Options>
      </OptionsContainer>
    </MainContainer>
  );
};

export default OptionsMenu;
