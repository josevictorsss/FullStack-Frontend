import React, { useCallback, useEffect, useRef } from "react";
import { useSpring, animated } from "react-spring";
import {
  Background,
  CloseModalButton,
  InnerSubtitles,
  ModalContent,
  ModalWrapper,
  Point,
} from "./styled";

const MusicModal = (props) => {
  const { showModal, setShowModal, music, genres } = props;
  const modalRef = useRef();
  const animation = useSpring({
    config: {
      duration: 250,
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0%)` : `translateY(-100%)`,
  });

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const keyPress = useCallback(
    (e) => {
      if (e.key === "Escape" && showModal) {
        setShowModal(false);
        console.log("I pressed");
      }
    },
    [setShowModal, showModal]
  );

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);

  return (
    <>
      {showModal ? (
        <Background onClick={closeModal} ref={modalRef}>
          <animated.div style={animation}>
            <ModalWrapper showModal={showModal}>
              <ModalContent>
                <h1>{music.title}</h1>
                <InnerSubtitles>
                  <p>{music.author}</p>
                  <Point>•</Point>
                  {genres.map((genre) => {
                    return <span>{genre}</span>;
                  })}
                </InnerSubtitles>
                <button>Excluir</button>
              </ModalContent>
              <CloseModalButton
                aria-label="Close modal"
                onClick={() => setShowModal((prev) => !prev)}
              />
            </ModalWrapper>
          </animated.div>
        </Background>
      ) : null}
    </>
  );
};

export default MusicModal;