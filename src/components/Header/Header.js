import React from "react";
import { HeaderContainer, Title } from "./styled";
import { NavBar, Button, ToolConfigBar, UserOptions, Nickname } from "./styled";
import { goToLogin, goToMusics, goToSignup } from "../../routes/Coordinator";
import { useHistory } from "react-router";
import Swal from "sweetalert2";

const Header = () => {
  const history = useHistory();
  const token = localStorage.getItem("token");
  const nickname = localStorage.getItem("nickname");

  const logout = () => {
    localStorage.removeItem("token");
    goToLogin(history);
    Swal.fire({
      title: "Você deslogou.",
      text: "Volte sempre",
      icon: "warning",
    });
  };

  return (
    <div>
      <HeaderContainer>
        {!token && (
          <NavBar position="static">
            <ToolConfigBar>
              <h1>Labefy</h1>
              <UserOptions>
                <Button onClick={() => goToLogin(history)}>Login</Button>|
                <Button onClick={() => goToSignup(history)}>Signup</Button>
              </UserOptions>
            </ToolConfigBar>
          </NavBar>
        )}
        {token && (
          <NavBar position="static">
            <ToolConfigBar>
              <Title onClick={() => goToMusics(history)}>Labefy</Title>
              <UserOptions>
                <Nickname>u/{nickname}</Nickname>
                <Button onClick={logout}>Logout</Button>
              </UserOptions>
            </ToolConfigBar>
          </NavBar>
        )}
      </HeaderContainer>
    </div>
  );
};

export default Header;
