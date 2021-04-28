import { BrowserRouter, Switch, Route } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import LoginPage from "../pages/LoginPage/LoginPage";
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
        <Route>
          <ErrorPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
