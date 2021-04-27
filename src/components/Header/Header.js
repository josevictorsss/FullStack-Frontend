import React from "react";
import { HeaderContainer } from "./styled";
import { Logo, NavBar, Button, ToolConfigBar, UserOptions } from "./styled";
import logo from "../../assets/logo.png";

const Header = () => {
  return (
    <div>
      <HeaderContainer>
        <NavBar position="static">
          <ToolConfigBar>
            <h1>Labefy</h1>
            <UserOptions>
              <Button>Login</Button>|<Button>Signup</Button>
            </UserOptions>
          </ToolConfigBar>
        </NavBar>
      </HeaderContainer>
    </div>
  );
};

export default Header;
