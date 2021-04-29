import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import useForm from "../../hooks/useForm";
import { addMusic } from "../../services/Music";
import {
  Container,
  FormContainer,
  StyledTextField,
  StyledButton,
} from "./styled";

const AddMusicForm = () => {
  const history = useHistory();
  const { form, changeState, clearInput } = useForm({
    title: "",
    author: "",
    file: "",
    album: "",
  });
  const [selectedGenres, setSelectedGenres] = useState([]);

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
          label="Artista"
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
        <StyledButton variant="outlined" color="secondary" type="submit">
          Adicionar Música
        </StyledButton>
      </FormContainer>
    </Container>
  );
};

export default AddMusicForm;
