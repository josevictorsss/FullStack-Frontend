import styled from "styled-components";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import { ToggleButton } from "@material-ui/lab";

export const StyledToggleButtonGroup = styled(ToggleButtonGroup)`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 5px;
  background-color: white;
`;

export const StyledToggleButton = styled(ToggleButton)`
  color: green;
  background-color: white;
`;
export const GenreType = styled.p`
  color: black;
  &:hover {
    color: green;
  }
`;
