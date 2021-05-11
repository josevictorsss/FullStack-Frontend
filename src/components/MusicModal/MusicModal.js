import React, { useCallback, useEffect, useRef, useState } from "react";
import { useSpring, animated } from "react-spring";
import AddMusicToPlaylistModal from "../AddMusicToPlaylistModal/AddMusicToPlaylistModal";
import {
  Background,
  CloseModalButton,
  InnerSubtitles,
  ModalButtons,
  ModalContent,
  ModalWrapper,
  Point,
} from "./styled";

const MusicModal = (props) => {
  const { showModal, setShowModal, music, genres } = props;
  const [showAddMusicModal, setShowAddMusicModal] = useState(false);
  const modalRef = useRef();
  const animation = useSpring({
    config: {
      duration: 250,
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0%)` : `translateY(-100%)`,
  });

  const openMusicModal = () => {
    setShowAddMusicModal((prev) => !prev);
  };

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const handleAddMusicModal = () => {
    openMusicModal();
    setShowModal(false);
  };

  const keyPress = useCallback(
    (e) => {
      if (e.key === "Escape" && showModal) {
        setShowModal(false);
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
                <ModalButtons>
                  <button>Excluir</button>
                  <button onClick={handleAddMusicModal}>
                    Adicionar a playlist
                  </button>
                </ModalButtons>
              </ModalContent>
              <CloseModalButton
                aria-label="Close modal"
                onClick={() => setShowModal((prev) => !prev)}
              />
            </ModalWrapper>
          </animated.div>
        </Background>
      ) : null}
      <AddMusicToPlaylistModal
        showModal={showAddMusicModal}
        setShowModal={setShowAddMusicModal}
        music={music}
      />
    </>
  );
};

export default MusicModal;
