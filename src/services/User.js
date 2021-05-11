import axios from "axios";
import { baseUrl } from "../constants/Urls";
import { goToMusics, goToUpdatePassword } from "../routes/Coordinator";
import Swal from "sweetalert2";

export const login = (body, history, setLoading) => {
  setLoading(true);
  axios
    .post(`${baseUrl}/user/login`, body)
    .then((response) => {
      setLoading(false);
      localStorage.setItem("token", response.data.acessToken);
      localStorage.setItem("nickname", response.data.user.nickname);
      goToMusics(history);
    })
    .catch((error) => {
      setLoading(false);
      Swal.fire({
        title: "Os dados estão errados!",
        text: "Tente novamente.",
        icon: "error",
      });
    });
};

export const signUp = (body, history, setLoading) => {
  setLoading(true);
  axios
    .post(`${baseUrl}/user/signup`, body)
    .then((response) => {
      setLoading(false);
      localStorage.setItem("token", response.data.acessToken);
      localStorage.setItem("nickname", response.data.user.nickname);
      goToMusics(history);
    })
    .catch((error) => {
      setLoading(false);
      Swal.fire({
        title: "Os dados foram preenchidos errados!",
        text: "Tente novamente.",
        icon: "error",
      });
    });
};

export const resetPassword = (body, history, setLoading) => {
  axios
    .post(`${baseUrl}/user/mail/password`, body)
    .then((response) => {
      setLoading(false);
      Swal.fire({
        title: "Senha resetada.",
        text: "Sua nova senha foi enviada para o email inserido",
        icon: "sucess",
      });
      goToUpdatePassword(history);
    })
    .catch((error) => {
      setLoading(false);
      Swal.fire({
        title: "O E-mail inserido está errado.",
        icon: "error",
      });
    });
};
