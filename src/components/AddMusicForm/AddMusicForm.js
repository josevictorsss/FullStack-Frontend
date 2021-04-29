import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import useForm from "../../hooks/useForm";

const AddMusicForm = () => {
  const history = useHistory();

  const { form, changeState, cleanInput } = useForm({
    title: "",
    author: "",
    file: "",
    album: "",
  });

  const [genres, setGenres] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState([]);
};

export default AddMusicForm;
