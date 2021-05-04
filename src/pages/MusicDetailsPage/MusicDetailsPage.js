import { useParams } from "react-router";
import Header from "../../components/Header/Header";
import Loading from "../../components/Loading/Loading";
import MusicDetailCard from "../../components/MusicDetailCard/MusicDetailCard";
import OptionsMenu from "../../components/OptionsMenu/OptionsMenu";
import { baseUrl } from "../../constants/Urls";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import useRequestData from "../../hooks/useRequestData";
import { DetailsContainer } from "./styled";

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
    <>
      <Header />
      <DetailsContainer>
        <OptionsMenu />
        {data ? <MusicDetailCard music={data} genres={data.genres} /> : <Loading />}
      </DetailsContainer>
    </>
  );
};

export default MusicDetailsPage;
