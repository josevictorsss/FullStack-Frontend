import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 5vh;
  border-bottom: 1px solid #edeff1;
  background-color: #1a0c09;
  padding: 0 16px;
  position: sticky;
  @media screen and (min-device-width: 320px) and (max-device-width: 420px) {
    height: 20vh;
  }
  @media screen and (min-device-width: 421px) and (max-device-width: 800px) {
    height: 20vh;
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
  &:hover {
    color: green;
  }
  @media screen and (min-device-width: 320px) and (max-device-width: 420px) {
    margin-top: 5px;
  }
  @media screen and (min-device-width: 421px) and (max-device-width: 800px) {
    margin-top: 10px;
  }
`;

export const UserOptions = styled.div`
  display: flex;
  padding: 0 16px;
  justify-content: center;
  align-items: center;
  flex: end;
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

export const Title = styled.h1`
  cursor: pointer;
  color: var(--white);
  &:hover {
    color: green;
  }
`;
