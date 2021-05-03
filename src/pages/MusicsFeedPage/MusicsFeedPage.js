import Header from "../../components/Header/Header";
import MusicCard from "../../components/MusicCard/MusicCard";
import OptionsMenu from "../../components/OptionsMenu/OptionsMenu";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import { FeedContainer } from "./styled";

const MusicsFeedPage = () => {
  useProtectedPage();

  return (
    <>
      <Header />
      <FeedContainer>
        <OptionsMenu />
        <MusicCard />
      </FeedContainer>
    </>
  );
};

export default MusicsFeedPage;
