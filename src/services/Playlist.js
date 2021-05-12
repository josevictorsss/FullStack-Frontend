import axios from "axios";
import Swal from "sweetalert2";
import { baseUrl } from "../constants/Urls";

const token = localStorage.getItem("token");

export const createPlaylist = (body) => {
  axios
    .post(`${baseUrl}/playlist/create`, body, {
      headers: {
        authorization: token,
      },
    })
    .then((response) => {
      Swal.fire({
        title: "Playlist criada",
        icon: "success",
      });
    })
    .catch((error) => {
      Swal.fire({
        title: "Erro ao criar a playlist.",
        text: "Preencha os campos corretamente",
        icon: "error",
      });
    });
};

export const addTrackToPlaylist = (body, getData) => {
  axios
    .put(`${baseUrl}/playlist/music`, body, {
      headers: {
        authorization: token,
      },
    })
    .then((response) => {
      Swal.fire({
        title: "Música adicionada a playlist",
        icon: "success",
      });
      getData();
    })
    .catch((error) => {
      Swal.fire({
        title: "Erro ao adicionar a música a playlist.",
        icon: "error",
      });
    });
};
