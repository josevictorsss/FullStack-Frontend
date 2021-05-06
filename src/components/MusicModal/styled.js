import styled from "styled-components";
import CloseIcon from "@material-ui/icons/Close";

export const Background = styled.div`
  width: 100%;
  height: 100%;
  background: transparent;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalWrapper = styled.div`
  width: 500px;
  height: 180px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: var(--white);
  color: var(--black-100);
  position: relative;
  z-index: 10;
  border-radius: 10px;
  margin-right: 400px;
  margin-bottom: 500px;
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  color: #141414;
  h1 {
    font-size: 40px;
    line-height: 96px;
    font-weight: 900;
  }
  p {
    font-size: 14px;
    font-weight: 700;
    line-height: 16px;
  }
  span {
    white-space: nowrap;
    font-size: 14px;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: normal;
  }
  button {
    padding: 10px 24px;
    margin-top: 20px;
    background: #141414;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
`;

export const CloseModalButton = styled(CloseIcon)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`;

export const InnerSubtitles = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Point = styled.p`
  margin: 0 4px;
  color: var(--black-50);
`;
