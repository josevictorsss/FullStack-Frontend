import { BrowserRouter, Switch, Route } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route>
          <ErrorPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
