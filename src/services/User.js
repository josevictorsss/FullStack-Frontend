import axios from "axios";
import { baseUrl } from "../constants/Urls";
import swal from "sweetalert2";

export const login = (body, setLoading) => {
  setLoading(true);
  axios
    .post(`${baseUrl}/user/login`, body)
    .then((response) => {
      setLoading(false);
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("username", response.data.user.username);
    })
    .catch((error) => {
      setLoading(false);
      swal({
        title: "Os dados estão errados!",
        text: "Tente novamente.",
        icon: "error",
        dangerMode: true,
      });
    });
};
