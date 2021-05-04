import {
  InnerSubtitles,
  MusicDetailContainer,
  Point,
  SubtitleAuthor,
  SubtitleDetail,
  SubtitleTitle,
  SUbtitleType,
} from "./styled";

const MusicDetailCard = (props) => {
  return (
    <MusicDetailContainer>
      <SubtitleDetail>MÚSICA</SubtitleDetail>
      <SubtitleTitle>{props.music.title}</SubtitleTitle>
      <InnerSubtitles>
        <SubtitleAuthor>{props.music.author}</SubtitleAuthor>
        <Point>•</Point>
        {props.genres.map((genre) => {
          return <SUbtitleType>{genre.type}</SUbtitleType>;
        })}
      </InnerSubtitles>
    </MusicDetailContainer>
  );
};

export default MusicDetailCard;
