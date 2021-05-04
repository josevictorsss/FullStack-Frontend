import { Inner, Loader, Middle, Outer } from "./styled";

const Loading = () => {
  return (
    <Loader>
      <Outer />
      <Middle />
      <Inner />
    </Loader>
  );
};

export default Loading;
