export const goToMusics = (history) => {
  history.push("/feed");
};

export const goToLogin = (history) => {
  history.push("/");
};

export const goToSignup = (history) => {
  history.push("/signup");
};

export const goToAddMusic = (history) => {
  history.push("/add/music");
};

export const goToPlaylists = (history) => {
  history.push("/playlists");
};

export const goToPlaylistDetails = (history, id) => {
  history.push(`/playlist/${id}`);
};
