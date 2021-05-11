import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import useForm from "../../hooks/useForm";
import { addMusic } from "../../services/Music";
import {
  Container,
  FormContainer,
  StyledTextField,
  StyledButton,
} from "./styled";
import { baseUrl } from "../../constants/Urls";
import GenreSelect from "../GenreSelect/GenreSelect";
import useRequestData from "../../hooks/useRequestData";

const AddMusicForm = () => {
  const history = useHistory();
  const { data } = useRequestData(
    `${baseUrl}/music/genres`,
    undefined,
    undefined
  );
  
  const { form, changeState, clearInput } = useForm({
    title: "",
    author: "",
    file: "",
    album: "",
  });
  
  const [genres, setGenres] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState([]);

  useEffect(() => {
    setGenres(data);
  }, [data]);

  const handleSetGenres = (event, genres) => {
    setSelectedGenres(genres);
  };

  const handleMusicForm = (event) => {
    event.preventDefault();
    const body = {
      title: form.title,
      author: form.author,
      file: form.file,
      genres: selectedGenres,
      album: form.album,
    };
    addMusic(body, history);
    clearInput();
  };

  return (
    <Container>
      <FormContainer autoComplete="off" onSubmit={handleMusicForm}>
        <StyledTextField
          required
          label="Título"
          type="text"
          name="title"
          variant="filled"
          value={form.title}
          onChange={changeState}
          fullWidth
        />
        <StyledTextField
          required
          label="Autor"
          type="text"
          name="author"
          variant="filled"
          value={form.author}
          onChange={changeState}
          fullWidth
        />
        <StyledTextField
          required
          label="URL"
          type="txt"
          name="file"
          variant="filled"
          value={form.file}
          onChange={changeState}
          fullWidth
        />
        <StyledTextField
          required
          label="Álbum"
          type="text"
          name="album"
          variant="filled"
          value={form.album}
          onChange={changeState}
          fullWidth
        />
        <GenreSelect
          genres={genres}
          value={selectedGenres}
          onChange={handleSetGenres}
        />
        <StyledButton variant="outlined" color="secondary" type="submit">
          Adicionar Música
        </StyledButton>
      </FormContainer>
    </Container>
  );
};

export default AddMusicForm;
