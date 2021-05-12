import React from "react";
import {
  StyledToggleButtonGroup,
  StyledToggleButton,
  GenreType,
} from "./styled";

const GenreSelect = (props) => {
  const { genres, value, onChange } = props;

  return (
    <StyledToggleButtonGroup value={value} onChange={onChange}>
      {genres &&
        genres.map((genre) => {
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
