import { BrowserRouter, Switch, Route } from "react-router-dom";
import AddMusicPage from "../pages/AddMusicPage/AddMusicPage";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import MusicsFeedPage from "../pages/MusicsFeedPage/MusicsFeedPage";
import PlaylistDetailsPage from "../pages/PlaylistDetailsPage/PlaylistDetailsPage";
import PlaylistsPage from "../pages/PlaylistsPage/PlaylistsPage";
import SignupPage from "../pages/SignupPage/SignupPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <LoginPage />
        </Route>
        <Route exact path="/signup">
          <SignupPage />
        </Route>
        <Route exact path="/feed">
          <MusicsFeedPage />
        </Route>
        <Route exact path="/add/music">
          <AddMusicPage />
        </Route>
        <Route exact path="/playlists">
          <PlaylistsPage />
        </Route>
        <Route exact path="/playlist/:id">
          <PlaylistDetailsPage />
        </Route>
        <Route>
          <ErrorPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
