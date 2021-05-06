import axios from "axios";
import Swal from "sweetalert2";
import { baseUrl } from "../constants/Urls";
import { goToMusics } from "../routes/Coordinator";

export const addMusic = (body, history) => {
  const token = localStorage.getItem("token");

  axios
    .post(`${baseUrl}/music/add`, body, {
      headers: {
        authorization: token,
      },
    })
    .then((res) => {
      Swal.fire({
        title: "Música adicionada",
        text: "Você já pode visualizar ela em suas músicas.",
        icon: "success",
      });
      goToMusics(history);
    })
    .catch((error) => {
      console.log(error);
      Swal.fire({
        title: "Erro ao adicionar a música, tente novamente.",
        icon: "error",
      });
    });
};
