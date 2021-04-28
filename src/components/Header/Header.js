import React from "react";
import { HeaderContainer } from "./styled";
import { NavBar, Button, ToolConfigBar, UserOptions } from "./styled";
import { goToLogin, goToSignup } from "../../routes/Coordinator";
import { useHistory } from "react-router";

const Header = () => {
  const history = useHistory();

  return (
    <div>
      <HeaderContainer>
        <NavBar position="static">
          <ToolConfigBar>
            <h1>Labefy</h1>
            <UserOptions>
              <Button onClick={() => goToLogin(history)}>Login</Button>|
              <Button onClick={() => goToSignup(history)}>Signup</Button>
            </UserOptions>
          </ToolConfigBar>
        </NavBar>
      </HeaderContainer>
    </div>
  );
};

export default Header;
