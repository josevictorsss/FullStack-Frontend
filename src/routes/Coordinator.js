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

export const goToDetails = (history, id) => {
  history.push(`/music/${id}`);
};

export const goToPlaylists = (history) => {
  history.push("/playlists")
}