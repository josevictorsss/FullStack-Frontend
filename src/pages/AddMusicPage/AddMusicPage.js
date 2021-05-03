import AddMusicForm from "../../components/AddMusicForm/AddMusicForm";
import OptionsMenu from "../../components/OptionsMenu/OptionsMenu";
import Header from "../../components/Header/Header";
import { AddMusicContainer } from "./styled";

const AddMusicPage = () => {
  return (
    <>
      <Header />
      <AddMusicContainer>
        <OptionsMenu />
        <AddMusicForm />
      </AddMusicContainer>
    </>
  );
};

export default AddMusicPage;
