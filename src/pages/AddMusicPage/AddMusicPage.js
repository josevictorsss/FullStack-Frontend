import React from "react";
import AddMusicForm from "../../components/AddMusicForm/AddMusicForm";
import OptionsMenu from "../../components/OptionsMenu/OptionsMenu";
import Header from "../../components/Header/Header";
import { AddContainer, AddMusicContainer } from "./styled";
import { useProtectedPage } from "../../hooks/useProtectedPage";

const AddMusicPage = () => {
  document.title = "+Music";
  useProtectedPage();
  return (
    <>
      <Header />
      <AddContainer>
        <OptionsMenu />
        <AddMusicContainer>
          <AddMusicForm />
        </AddMusicContainer>
      </AddContainer>
    </>
  );
};

export default AddMusicPage;
