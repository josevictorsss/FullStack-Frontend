import { useParams } from "react-router";
import { baseUrl } from "../../constants/Urls";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import useRequestData from "../../hooks/useRequestData";

const MusicDetailsPage = () => {
  useProtectedPage();
  const config = {
    headers: {
      authorization: localStorage.getItem("token"),
    },
  };
  const params = useParams();
  const { data } = useRequestData(
    `${baseUrl}/music/${params.id}`,
    config,
    undefined
  );
  return (
    <div>
      <p>Oi</p>
    </div>
  );
};

export default MusicDetailsPage;
