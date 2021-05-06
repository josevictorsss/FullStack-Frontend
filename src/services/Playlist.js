import axios from "axios";
import Swal from "sweetalert2";
import { baseUrl } from "../constants/Urls";

export const createPlaylist = (body) => {
  const token = localStorage.getItem("token");

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
