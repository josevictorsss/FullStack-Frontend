import axios from "axios";
import { baseUrl } from "../constants/Urls";
import { goToMusics } from "../routes/Coordinator";
import Swal from "sweetalert2";

export const login = (body, history, setLoading) => {
  setLoading(true);
  axios
    .post(`${baseUrl}/user/login`, body)
    .then((response) => {
      setLoading(false);
      localStorage.setItem("token", response.data.token);
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
      localStorage.setItem("token", response.data.token);
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
