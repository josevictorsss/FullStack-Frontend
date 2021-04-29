import styled from "styled-components";
import AppBar from "@material-ui/core/AppBar";
import { Toolbar } from "@material-ui/core";

export const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  height: 5vh;
  border-bottom: 1px solid #edeff1;
  background-color: #1a0c09;
  @media screen and (min-device-width: 320px) and (max-device-width: 420px) {
    height: 30vh;
  }
  @media screen and (min-device-width: 421px) and (max-device-width: 800px) {
    height: 20vh;
  }
`;

export const Logo = styled.img`
  height: 70px;
  margin-top: 10px;
  cursor: pointer;
  @media screen and (min-device-width: 320px) and (max-device-width: 420px) {
    height: 8vh;
  }
  @media screen and (min-device-width: 421px) and (max-device-width: 800px) {
    height: 8vh;
  }
`;

export const Button = styled.button`
  border-radius: 9999px;
  background-color: rgba(0, 0, 0, 0.7);
  color: var(--white);
  height: 30px;
  width: 100px;
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
  margin-right: 20px;
  text-align: center;
  cursor: pointer;
  @media screen and (min-device-width: 320px) and (max-device-width: 420px) {
    margin-top: 5px;
  }
  @media screen and (min-device-width: 421px) and (max-device-width: 800px) {
    margin-top: 10px;
  }
`;

export const NavBar = styled(AppBar)`
  display: flex;
  justify-content: space-evenly;
  background-color: #1a0c09;
  @media screen and (min-device-width: 320px) and (max-device-width: 420px) {
    flex-direction: column;
  }
  @media screen and (min-device-width: 421px) and (max-device-width: 800px) {
    flex-direction: column;
  }
`;

export const ToolConfigBar = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
  padding-left: 0px;
  background-color: #1a0c09;
  @media screen and (min-device-width: 320px) and (max-device-width: 420px) {
    flex-direction: column;
  }
  @media screen and (min-device-width: 421px) and (max-device-width: 800px) {
    flex-direction: column;
  }
`;

export const UserOptions = styled.div`
  display: flex;
  color: black;
  padding: 10px 5px 0 20px;
  justify-content: center;
  align-items: center;
  @media screen and (min-device-width: 320px) and (max-device-width: 420px) {
    flex-direction: column;
    padding: 4px;
  }
  @media screen and (min-device-width: 421px) and (max-device-width: 800px) {
    flex-direction: column;
  }
`;

export const Nickname = styled.div`
  padding-right: 50px;
  color: white;
  font-size: 16px;
  @media screen and (min-device-width: 320px) and (max-device-width: 420px) {
    padding-right: 0;
  }
  @media screen and (min-device-width: 421px) and (max-device-width: 800px) {
    padding-right: 0;
  }
`;
