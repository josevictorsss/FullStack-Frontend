import React, { useCallback, useEffect, useRef } from "react";
import { useSpring } from "@react-spring/core";
import { animated } from "@react-spring/web";
import {
  Background,
  CloseModalButton,
  FormContainer,
  ModalContent,
  ModalWrapper,
  StyledButton,
  StyledTextField,
} from "./styled";
import useForm from "../../hooks/useForm";
import { createPlaylist } from "../../services/Playlist";

const PlaylistModal = (props) => {
  const { showModal, setShowModal } = props;
  const { form, changeState, clearInput } = useForm({
    title: "",
    subtitle: "",
  });
  const modalRef = useRef();
  const animation = useSpring({
    config: {
      duration: 250,
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0%)` : `translateY(-100%)`,
  });

  const closeModal = () => {
    setShowModal(false);
  };

  const handlePlaylistForm = (event) => {
    event.preventDefault();
    const body = {
      title: form.title,
      subtitle: form.subtitle,
    };
    createPlaylist(body);
    closeModal();
    clearInput();
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
        <Background ref={modalRef}>
          <animated.div style={animation}>
            <ModalWrapper showModal={showModal}>
              <ModalContent>
                <FormContainer autoComplete="off" onSubmit={handlePlaylistForm}>
                  <StyledTextField
                    required
                    label="Título"
                    type="text"
                    name="title"
                    variant="filled"
                    value={form.title}
                    onChange={changeState}
                    fullWidth
                  />
                  <StyledTextField
                    required
                    label="Descrição"
                    type="text"
                    name="subtitle"
                    variant="filled"
                    value={form.subtitle}
                    onChange={changeState}
                    fullWidth
                  />
                  <StyledButton
                    variant="outlined"
                    color="primary"
                    type="submit"
                  >
                    Criar playlist
                  </StyledButton>
                </FormContainer>
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

export default PlaylistModal;
