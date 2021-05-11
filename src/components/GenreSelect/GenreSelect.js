import React from "react";
import {
  StyledToggleButtonGroup,
  StyledToggleButton,
  GenreType,
} from "./styled";

const GenreSelect = (props) => {
  return (
    <StyledToggleButtonGroup value={props.value} onChange={props.onChange}>
      {props.genres &&
        props.genres.map((genre) => {
          return (
            <StyledToggleButton key={genre} value={genre}>
              <GenreType>{genre}</GenreType>
            </StyledToggleButton>
          );
        })}
    </StyledToggleButtonGroup>
  );
};

export default GenreSelect;
