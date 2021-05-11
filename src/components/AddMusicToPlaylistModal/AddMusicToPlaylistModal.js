import React, { useSpring } from "@react-spring/core";
import { useEffect, useRef, useState } from "react";
import { animated } from "@react-spring/web";
import {
  Background,
  ModalWrapper,
  ModalContent,
  CloseModalButton,
  FlexForm,
  StyledDialogActions,
  StyledButton,
} from "./styled";
import useRequestData from "../../hooks/useRequestData";
import { baseUrl } from "../../constants/Urls";
import { MenuItem, Select, DialogTitle } from "@material-ui/core";
import { addTrackToPlaylist } from "../../services/Playlist";

const AddMusicToPlaylistModal = (props) => {
  const { showModal, setShowModal, music } = props;
  
  const config = {
    headers: {
      authorization: localStorage.getItem("token"),
    },
  };

  const { data, getData } = useRequestData(
    `${baseUrl}/playlist/`,
    config,
    undefined
  );
  
  const [options, setOptions] = useState("");
  const [playlists, setPlaylists] = useState([]);
  const [selectedPlaylist, setSelectedPlaylist] = useState(undefined);

  useEffect(() => {
    if (data) {
      setOptions(data[0].title);
      setSelectedPlaylist(data[0]);
      setPlaylists(data);
    }
  }, [data]);

  const modalRef = useRef();
  const animation = useSpring({
    config: {
      duration: 250,
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0%)` : `translateY(-100%)`,
  });

  const onChangePlaylist = (event) => {
    const playlistTitle = event.target.value;
    setOptions(playlistTitle);
    const selectedPlaylist = playlists.find(
      (playlist) => playlist.title === playlistTitle
    );
    setSelectedPlaylist(selectedPlaylist);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleAddMusicForm = (event) => {
    event.preventDefault();
    const body = {
      musicId: music.id,
      playlistId: selectedPlaylist.id,
    };
    addTrackToPlaylist(body, getData);
    closeModal();
  };

  return (
    <>
      {showModal ? (
        <Background ref={modalRef}>
          <animated.div style={animation}>
            <ModalWrapper showModal={showModal}>
              <ModalContent>
                <DialogTitle id="select-playlist-dialog">
                  Selecione uma playlist:
                </DialogTitle>
                <FlexForm onSubmit={handleAddMusicForm}>
                  <Select
                    name="select"
                    labelId="playlist-select-label"
                    id="playlist-select"
                    value={options}
                    variant="outlined"
                    onChange={onChangePlaylist}
                  >
                    {data &&
                      data.map((playlist) => {
                        return (
                          <MenuItem value={playlist.title}>
                            {playlist.title}
                          </MenuItem>
                        );
                      })}
                  </Select>
                  <StyledDialogActions>
                    <StyledButton type="submit" variant="contained">
                      Adicionar
                    </StyledButton>
                  </StyledDialogActions>
                </FlexForm>
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

export default AddMusicToPlaylistModal;
